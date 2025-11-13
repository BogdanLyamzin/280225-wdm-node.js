import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";
import { FilterQuery } from "mongoose";

import User, { UserDocument } from "../db/models/User.js";

import HttpError from "../utils/HttpError.js";
import sendEmail from "../utils/sendEmail.js";

import {
  RegisterPayload,
  VerifyPayload,
  LoginPayload,
  ResetPasswordPayload,
} from "../schemas/auth.schemas.js";
import { EmailPayload } from "../types/interfaces.js";

export interface LoginResult {
  token: string;
  user: {
    username: string;
    email: string;
  };
}

export interface ResetPasswordResult {
  message: string;
}

type FindUserResult = UserDocument | null;

const { JWT_SECRET, FRONTENT_URL } = process.env;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET not deefine in environment variables");
}
if (!FRONTENT_URL) {
  throw new Error("FRONTENT_URL not deefine in environment variables");
}

export const findUser = (query: FilterQuery<UserDocument>): FindUserResult => User.findOne(query);

export const register = async (
  payload: RegisterPayload,
): Promise<UserDocument> => {
  const { email, password } = payload;
  const user: FindUserResult = await findUser({ email });
  if (user) throw HttpError(409, "Email already in use");

  const hashPassword: string = await bcrypt.hash(password, 10);
  const newUser: UserDocument = await User.create({
    ...payload,
    password: hashPassword,
  });

  const token: string = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });
  const verifyEmail: EmailPayload = {
    to: email,
    subject: "Verify email",
    html: `<a href="${FRONTENT_URL}/verify?token=${token}" target="_blank">Click verify email</a>`,
  };
  await sendEmail(verifyEmail);

  return newUser;
};

export const verifyUser = async ({
  token,
}: VerifyPayload): Promise<UserDocument> => {
  try {
    const { email } = jwt.verify(token, JWT_SECRET) as JwtPayload;
    const user: FindUserResult = await findUser({ email });
    if (!user) throw HttpError(401, "User not found");
    if (user.verify) throw HttpError(401, "Email already verified");
    user.verify = true;
    return user.save();
  } catch (error) {
    if (error instanceof Error) {
      throw HttpError(401, error.message);
    }
    throw HttpError(401, "Unknown user verify error");
  }
};

export const login = async ({
  email,
  password,
}: LoginPayload): Promise<LoginResult> => {
  const user: FindUserResult = await findUser({ email });

  if (!user) throw HttpError(401, "Email or password invalid");

  if (!user.verify) throw HttpError(401, "Email not verified");

  const passwordCompare: boolean = await bcrypt.compare(
    password,
    user.password,
  );
  if (!passwordCompare) throw HttpError(401, "Email or password invalid");

  const token: string = jwt.sign({ email }, JWT_SECRET, { expiresIn: "24h" });
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

export const resetPassword = async ({
  email,
}: ResetPasswordPayload): Promise<ResetPasswordResult> => {
  const user: FindUserResult = await findUser({ email });
  if (!user) throw HttpError(401, "User not found");
  const token: string = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });
  const newPasswordEmail: EmailPayload = {
    to: email,
    subject: "New password",
    html: `<a href="${FRONTENT_URL}/new-password?token=${token}" target="_blank">Click create new password</a>`,
  };
  await sendEmail(newPasswordEmail);
  return {
    message: "Link for create new password send to email",
  };
};

export const refreshSession = async (
  user: UserDocument,
): Promise<LoginResult> => {
  const { email, username } = user;
  const token: string = jwt.sign({ email }, JWT_SECRET, { expiresIn: "24h" });
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

export const logout = async ({
  email,
}: UserDocument): Promise<UserDocument> => {
  const user: FindUserResult = await findUser({ email });
  if (!user) {
    throw HttpError(401, `email=${email} not found`);
  }
  user.token = null;
  return user.save();
};
