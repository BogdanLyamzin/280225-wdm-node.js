import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../db/models/User.js";

import HttpError from "../utils/HttpError.js";

const { JWT_SECRET } = process.env;

export const findUser = (query) => User.findOne(query);

export const register = async (payload) => {
  const {email, password} = payload;
  const user = await findUser({email});
  if(user) throw HttpError(409, "Email already in use");

  const hashPassword = await bcrypt.hash(password, 10);
  return User.create({ ...payload, password: hashPassword });
};

export const login = async ({ email, password }) => {
  const user = await findUser({ email });

  if (!user) throw HttpError(401, "Email or password invalid");

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
