import { register, login, refreshSession, logout } from "../services/auth.service.js";

import validateBody from "../utils/validateBody.js";

import { registerSchema, loginSchema } from "../schemas/auth.schemas.js";

export const registerController = async(req, res)=> {
    validateBody(registerSchema, req.body);
    await register(req.body);

    res.status(201).json({
        message: "Register successfully"
    });
}

export const loginController = async(req, res)=> {
    validateBody(loginSchema, req.body);
    const result = await login(req.body);

    res.json(result);
}

export const getCurrentController =  (req, res)=> {
    const result = refreshSession(req.user);
    res.json(result);
}

export const logoutController = async(req, res)=> {
    await logout(req.user);

    res.json({
        message: "logout successfully"
    })
}