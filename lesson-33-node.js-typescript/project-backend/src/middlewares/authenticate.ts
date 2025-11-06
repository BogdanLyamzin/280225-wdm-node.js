import {Response, NextFunction} from "express";
import jwt, {JwtPayload} from "jsonwebtoken";

import HttpError from "../utils/HttpError.js";

import { findUser } from "../services/auth.service";

import {AuthorizationRequest} from "../types/interfaces";

const {JWT_SECRET} = process.env;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET not deefine in environment variables");
}

const authenticate = async (req: AuthorizationRequest, res: Response, next: NextFunction) => {
  const authorization = req.get("Authorization");
  if (!authorization) throw HttpError(401, "Authorization header missing");

  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer")
    throw HttpError(401, "Authorization header must have Bearer type");

  try {
    const {email} = jwt.verify(token, JWT_SECRET) as JwtPayload;
    const user = await findUser({email});
    if(!user || !user.token) throw HttpError(401, "User not found");
    req.user = user;
    next();
  }
  catch(error) {
    if(error instanceof Error) {
      throw HttpError(401, error.message);
    }
    throw HttpError(401, "Unknown authenticate error");
  }
};

export default authenticate;
