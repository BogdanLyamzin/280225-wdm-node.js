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

import { registerSchema, loginSchema } from "../schemas/auth.schemas.js";

export const registerController = async (req: Request, res: Response): Promise<void> => {
  validateBody(registerSchema, req.body);
  await register(req.body);

  res.status(201).json({
    message: "Register successfully",
  });
};

export const verifyController: RequestHandler = async (req, res): Promise<void> => {
  await verifyUser(req.body);

  res.json({
    message: "User successfully verified",
  });
};

export const loginController = async (req: Request, res: Response): Promise<void> => {
  validateBody(loginSchema, req.body);
  const result = await login(req.body);

  res.json(result);
};

export const resetPasswordController: RequestHandler = async (req, res): Promise<void> => {
  const result = await resetPassword(req.body);

  res.json(result);
};

export const getCurrentController = async (req: Request, res: Response): Promise<void> => {
  const result = await refreshSession(req.user);
  res.json(result);
};

export const logoutController: RequestHandler = async (req, res) => {
  await logout(req.user);

  res.json({
    message: "logout successfully",
  });
};
