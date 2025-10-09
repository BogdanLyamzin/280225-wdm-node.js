import { Router } from "express";

import { registerController, loginController } from "../controllers/auth.controller.js";

const authRouter = Router();

// /signup
authRouter.post("/register", registerController);

// /signin
authRouter.post("/login", loginController);

export default authRouter;