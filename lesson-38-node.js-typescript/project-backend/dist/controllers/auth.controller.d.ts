import { Request, Response, RequestHandler } from "express";
import { AuthorizationRequest } from "../types/interfaces";
export declare const registerController: (req: Request, res: Response) => Promise<void>;
export declare const verifyController: RequestHandler;
export declare const loginController: (req: Request, res: Response) => Promise<void>;
export declare const resetPasswordController: RequestHandler;
export declare const getCurrentController: (req: AuthorizationRequest, res: Response) => Promise<void>;
export declare const logoutController: (req: AuthorizationRequest, res: Response) => Promise<void>;
//# sourceMappingURL=auth.controller.d.ts.map