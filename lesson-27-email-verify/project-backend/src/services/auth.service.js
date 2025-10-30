import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../db/models/User.js";

import HttpError from "../utils/HttpError.js";
import sendEmail from "../utils/sendEmail.js";

const { JWT_SECRET, FRONTENT_URL } = process.env;

export const findUser = (query) => User.findOne(query);

export const register = async (payload) => {
  const {email, password} = payload;
  const user = await findUser({email});
  if(user) throw HttpError(409, "Email already in use");

  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ ...payload, password: hashPassword });

  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });
  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a href="${FRONTENT_URL}/verify?token=${token}" target="_blank">Click verify email</a>`
  };
  await sendEmail(verifyEmail);
  
  return newUser;
};

export const verifyUser = async ({token}) => {
  try {
    const {email} = jwt.verify(token, JWT_SECRET);
    const user = await findUser({email});
    if(!user) throw HttpError(401, "User not found");
    if(user.verify) throw HttpError(401, "Email already verified");
    user.verify = true;
    return user.save();
  }
  catch(error) {
    throw HttpError(401, error.message);
  }
}

export const login = async ({ email, password }) => {
  const user = await findUser({ email });

  if (!user) throw HttpError(401, "Email or password invalid");

  if(!user.verify) throw HttpError(401, "Email not verified");

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) throw HttpError(401, "Email or password invalid");

  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "24h" });
  user.token = token;
  await user.save();

  return {
    token,
    user: {
      email: user.email,
      username: user.username,
    },
  };
};

export const resetPassword = async ({email}) => {
  const user = await findUser({email});
  if(!user) throw HttpError(401, "User not found");
  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });
  const newPasswordEmail = {
    to: email,
    subject: "New password",
    html: `<a href="${FRONTENT_URL}/new-password?token=${token}" target="_blank">Click create new password</a>`
  };
  await sendEmail(newPasswordEmail);
  return {
    message: "Link for create new password send to email"
  }
}

export const refreshSession = async (user) => {
  const { email, username } = user;
  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "24h" });
  user.token = token;
  await user.save();
  
  return {
    token,
    user: {
      email,
      username,
    },
  };
};

export const logout = async ({ email }) => {
  const user = await findUser({ email });
  user.token = null;
  return user.save();
};
