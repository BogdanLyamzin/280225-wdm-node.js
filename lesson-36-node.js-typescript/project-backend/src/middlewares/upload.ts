import multer from "multer";
import path from "node:path";
import { Request } from "express";

import HttpError from "../utils/HttpError.js";

type MulterFileCallback = (error: Error | null, filename: string) => void;
type MulterFilterCallback = (error: Error | null, isSave?: boolean) => void;

interface Limits {
  fieldNameSize?: number | undefined;
  fieldSize?: number | undefined;
  fields?: number | undefined;
  fileSize?: number | undefined;
  files?: number | undefined;
  parts?: number | undefined;
  headerPairs?: number | undefined;
}

const destination: string = path.resolve("temp");

const storage: multer.StorageEngine = multer.diskStorage({
  // destination: (req, file, cb)=> {
  //     cb(null, destination);
  // }
  destination,
  filename: (_: Request, file: Express.Multer.File, cb: MulterFileCallback) => {
    const uniquePreffix: string = `${Date.now()}_${Math.round(Math.random() * 1e9)}`;
    const filename: string = `${uniquePreffix}_${file.originalname}`;
    cb(null, filename);
  },
});

const limits: Limits = {
  fileSize: 1024 * 1024 * 10,
};

const fileFilter = (req: Request, file: Express.Multer.File, cb: MulterFilterCallback) => {
  const extenstion: string | undefined = file.originalname.split(".").pop();
  if(!extenstion) {
    return cb(HttpError(400, "File must have name"));
  }
  if (extenstion === "exe") {
    return cb(HttpError(400, ".exe extention for files not allow"));
  }
  cb(null, true);
};

const upload = multer({
  storage,
  limits,
  fileFilter,
});

export default upload;
