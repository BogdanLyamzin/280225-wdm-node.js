import multer from "multer";
import path from "node:path";
import HttpError from "../utils/HttpError.js";
const destination = path.resolve("temp");
const storage = multer.diskStorage({
    // destination: (req, file, cb)=> {
    //     cb(null, destination);
    // }
    destination,
    filename: (req, file, cb) => {
        const uniquePreffix = `${Date.now()}_${Math.round(Math.random() * 1E9)}`;
        const filename = `${uniquePreffix}_${file.originalname}`;
        cb(null, filename);
    }
});
const limits = {
    fileSize: 1024 * 1024 * 10
};
const fileFilter = (req, file, cb) => {
    const extenstion = file.originalname.split(".").pop();
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
//# sourceMappingURL=upload.js.map