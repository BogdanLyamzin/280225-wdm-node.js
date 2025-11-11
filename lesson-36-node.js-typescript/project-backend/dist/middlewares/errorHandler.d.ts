import { Request, Response, NextFunction } from "express";
import { ResponseError } from "../types/interfaces";
declare const errorHandler: (error: ResponseError, req: Request, res: Response, next: NextFunction) => void;
export default errorHandler;
//# sourceMappingURL=errorHandler.d.ts.map