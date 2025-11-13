import { Router, Request, Response, NextFunction } from "express";

import {
  registerController,
  verifyController,
  loginController,
  resetPasswordController,
  getCurrentController,
  logoutController,
} from "../controllers/auth.controller.js";

import authenticate from "../middlewares/authenticate.js";

const authRouter: Router = Router();

// /signup
authRouter.post("/register", registerController);

authRouter.post("/verify", verifyController);

// /signin
authRouter.post("/login", loginController);

authRouter.post("/reset-password", resetPasswordController);

authRouter.get("/current", authenticate, getCurrentController);

authRouter.post("/logout", authenticate, logoutController);

export default authRouter;
