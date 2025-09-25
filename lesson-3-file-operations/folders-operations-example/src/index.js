import fs from "node:fs/promises";
import path from "node:path";

const createDir = async dirpath => {
    try {
        await fs.mkdir(dirpath);
        return true;
    }
    catch(error) {
        return false;
    }
}

const isFileOrDirExist = async path => {
    try {
        await fs.access(path);
        return true;
    }
    catch(error) {
        if(error.code === "ENOENT") {
            return false;
        }
        throw error;
    }
}

const deleteDir = async path => {
    try {
        await fs.rmdir(path);
        return true;
    }
    catch {
        return false;
    }
}

// const newFilesPath = path.resolve("src", "new-files");

// const result = await createDir(newFilesPath);
// console.log(result);
// const isExist = await fs.access(newFilesPath);
// console.log(isExist);
// const result = await isFileOrDirExist(newFilesPath);
// console.log(result);
// await fs.rmdir(newFilesPath);
// await deleteDir(newFilesPath)

const filepath = path.resolve("src", "files");
const files = await fs.readdir(filepath);
console.log(files);