import { Request, Response, NextFunction } from "express";

import {ResponseError} from "../types/interfaces.js";

const errorHandler = (
  error: ResponseError,
  _: Request,
  res: Response,
  __: NextFunction,
) => {
  const { status = 500, message = "Server error" } = error;
  res.status(status).json({
    message,
  });
};

export default errorHandler;
