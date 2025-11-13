import { Request } from "express";

import { UserDocument } from "../db/models/User.js";

export interface AuthorizationRequest extends Request {
  user: UserDocument;
}

export interface ResponseError extends Error {
  status: number;
}

export interface EmailPayload {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
}