import { Router } from "express";
import { registerController, verifyController, loginController, resetPasswordController, getCurrentController, logoutController, } from "../controllers/auth.controller";
import authenticate from "../middlewares/authenticate.js";
const authRouter = Router();
// /signup
authRouter.post("/register", registerController);
authRouter.post("/verify", verifyController);
// /signin
authRouter.post("/login", loginController);
authRouter.post("/reset-password", resetPasswordController);
authRouter.get("/current", authenticate, getCurrentController);
authRouter.post("/logout", authenticate, logoutController);
export default authRouter;
//# sourceMappingURL=auth.router.js.map