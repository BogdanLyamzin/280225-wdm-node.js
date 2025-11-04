import { register, verifyUser, login, resetPassword, refreshSession, logout } from "../services/auth.service.js";
import validateBody from "../utils/validateBody.js";
import { registerSchema, loginSchema } from "../schemas/auth.schemas.js";
export const registerController = async (req, res) => {
    validateBody(registerSchema, req.body);
    await register(req.body);
    res.status(201).json({
        message: "Register successfully"
    });
};
export const verifyController = async (req, res) => {
    await verifyUser(req.body);
    res.json({
        message: "User successfully verified"
    });
};
export const loginController = async (req, res) => {
    validateBody(loginSchema, req.body);
    const result = await login(req.body);
    res.json(result);
};
export const resetPasswordController = async (req, res) => {
    const result = await resetPassword(req.body);
    res.json(result);
};
export const getCurrentController = async (req, res) => {
    const result = await refreshSession(req.user);
    res.json(result);
};
export const logoutController = async (req, res) => {
    await logout(req.user);
    res.json({
        message: "logout successfully"
    });
};
//# sourceMappingURL=auth.controller.js.map