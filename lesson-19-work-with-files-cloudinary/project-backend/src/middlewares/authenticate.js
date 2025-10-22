import jwt from "jsonwebtoken";

import HttpError from "../utils/HttpError.js";

import { findUser } from "../services/auth.service.js";

const {JWT_SECRET} = process.env;

const authenticate = async (req, res, next) => {
  const authorization = req.get("Authorization");
  if (!authorization) throw HttpError(401, "Authorization header missing");

  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer")
    throw HttpError(401, "Authorization header must have Bearer type");

  try {
    const {email} = jwt.verify(token, JWT_SECRET);
    const user = await findUser({email});
    if(!user || !user.token) throw HttpError(401, "User not found");
    req.user = user;
    next();
  }
  catch(error) {
    throw HttpError(401, error.message);
  }
};

export default authenticate;
