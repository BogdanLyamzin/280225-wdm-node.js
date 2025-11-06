import { Request, Response, NextFunction } from "express";

import {ResponseError} from "../types/interfaces";

const errorHandler = (
  error: ResponseError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { status = 500, message = "Server error" } = error;
  res.status(status).json({
    message,
  });
};

export default errorHandler;
