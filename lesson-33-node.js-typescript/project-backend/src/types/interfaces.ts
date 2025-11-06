import { Request } from "express";

import { UserDocument } from "../db/models/User.js";

interface AuthorizationRequest extends Request {
  user: UserDocument;
}

interface ResponseError extends Error {
  status: number;
}
