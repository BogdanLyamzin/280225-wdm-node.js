import { Response, NextFunction } from "express";
import { AuthorizationRequest } from "../types/interfaces";
declare const authenticate: (req: AuthorizationRequest, res: Response, next: NextFunction) => Promise<void>;
export default authenticate;
//# sourceMappingURL=authenticate.d.ts.map