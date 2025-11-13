import { Request, Response, RequestHandler } from "express";

import {
  register,
  verifyUser,
  login,
  resetPassword,
  refreshSession,
  logout,
} from "../services/auth.service.js";

import validateBody from "../utils/validateBody.js";

import { registerSchema, verifySchema, loginSchema, resetPasswordSchema } from "../schemas/auth.schemas.js";

import { LoginResult, ResetPasswordResult } from "../services/auth.service.js";

import { UserDocument } from "../db/models/User.js";

export const registerController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  validateBody(registerSchema, req.body);
  await register(req.body);

  res.status(201).json({
    message: "Register successfully",
  });
};

export const verifyController: RequestHandler = async (
  req,
  res,
): Promise<void> => {
  validateBody(verifySchema, req.body);
  await verifyUser(req.body);

  res.json({
    message: "User successfully verified",
  });
};

export const loginController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  validateBody(loginSchema, req.body);
  const result: LoginResult = await login(req.body);

  res.json(result);
};

export const resetPasswordController: RequestHandler = async (
  req,
  res,
): Promise<void> => {
  await validateBody(resetPasswordSchema, req.body);
  const result: ResetPasswordResult = await resetPassword(req.body);

  res.json(result);
};

export const getCurrentController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const result: LoginResult = await refreshSession(req.user as UserDocument);
  res.json(result);
};

export const logoutController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  await logout(req.user as UserDocument);

  res.json({
    message: "logout successfully",
  });
};
