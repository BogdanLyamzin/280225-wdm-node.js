import { Router } from "express";

import { registerController, loginController, getCurrentController, logoutController } from "../controllers/auth.controller.js";

import authenticate from "../middlewares/authenticate.js";

const authRouter = Router();

// /signup
authRouter.post("/register", registerController);

// /signin
authRouter.post("/login", loginController);

authRouter.get("/current", authenticate, getCurrentController);

authRouter.post("/logout", authenticate, logoutController);

export default authRouter;