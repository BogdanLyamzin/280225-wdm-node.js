import { Document, CallbackError } from "mongoose";

type MongooseErrorWithStatus = CallbackError & { status?: number };

type MongooseNext = (err?: CallbackError) => void;

export const handleSaveError = (
  error: MongooseErrorWithStatus,
  doc: Document,
  next: MongooseNext,
) => {
  if (error?.name === "ValidationError") {
    error.status = 400;
  }
  if (error?.name === "MongoServerError") {
    error.status = 409;
  }
  next();
};

export const setUpdateSettings = function (next: MongooseNext) {
  this.options.new = true;
  this.options.runValidators = true;
  next();
};
