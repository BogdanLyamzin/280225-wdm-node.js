// import fs from "node:fs";
import * as fs from "node:fs/promises";
// const promise = new Promise((resolve, reject)=> {
//     setTimeout(()=> {
//         const date = new Date();
//         if(date.getHours() < 9){
//             resolve("Good study!");
//             // promise.status = "fullfiled";
//             // promise.result = "Good study!";
//         }
//         else {
//             reject(new Error("Too late for study"));
//             // promise.status = "rejected";
//             // promise.error = "Too late for study";
//         }
//     }, 3000);
// });

// promise
//     .then(result => console.log(result))
//     .catch(error => console.log(error.message));

// const promiseRandom = new Promise<number>((resolve, reject)=> {
//     setTimeout(()=> {
//         const random = Math.random();
//         if(random > 0.5) {
//             resolve(random);
//         }
//         else {
//             reject(new Error(String(random)));
//         }
//     }, 5000);
// });

// promiseRandom
//     .then(result => console.log(`Promise resolve successfully with result=${result}`))
//     .catch(error => console.log(`Promise rejected with error=${error.message}`))
//     .finally(()=> console.log("Promise finished"))

// const readFile = (filepath: string) => {
//     return new Promise((resolve, reject)=> {
//         fs.readFile(filepath, "utf-8", (error, data)=> {
//             if(error) {
//                 reject(error);
//                 // readFilePromise.status = "rejected";
//                 // readFilePromise.error = error;
//             }
//             else {
//                 resolve(data);
//                 // readFilePromise.status = "fullfiled";
//                 // readFilePromise.result = data;
//             }
//         });
//     })
// }

// const readFilePromise = readFile("file.txt");
// readFilePromise
//     .then(result => console.log(result))
//     .catch(error => console.log(error.message));
/*
    const thenCallback = result => console.log(result);
    const catchCallback = error => console.log(error.message);
    if(readFilePromise.status === "fullfiled") {
        thenCallback(readFilePromise.result);
    }
    else {
        catchCallback(readFilePromise.error);
    }
    */

// const copyFileData = async (file1path: string, file2path: string) => {
//     try {
//         const data = await fs.readFile(file1path, "utf-8");
//         /*
//         if(promise.status === "fullfiled") {
//             const data = promise.result;
//         }
//         else {
//             throw new Error()
//         }
//         */
//         await fs.writeFile(file2path, data);
//     }
//     catch(error) {
//         if(error instanceof Error) {
//             console.log(`File copy error ${error.message}`);
//         }
//     }
//     finally {
//         console.log("Copy file process finished")
//     }
   
// //   fs.readFile(file1path, "utf-8")
// //     .then((data) => {
// //       fs.writeFile(file2path, data)
// //         .then(() => console.log("File copy successfully"))
// //         .catch((error) => console.log(`File copy error ${error.message}`));
// //     })
// //     .catch((error) => console.log(`Cannot read file. Error ${error.message}`));
// };

// copyFileData("file3.txt", "file2.txt");

const copyFilesData = async (fileResulPath: string, ...filespath: string[]) => {
    if(!filespath.length) {
        throw new Error("Files for copy must be exist");
    }
    try {
        // const data1 = await fs.readFile(filespath[0] as string, "utf-8");
        // const data2 = await fs.readFile(filespath[1] as string, "utf-8");
        // const data3 = await fs.readFile(filespath[2] as string, "utf-8");
        // const results = await Promise.all([
        //     fs.readFile(filespath[0] as string, "utf-8"),
        //     fs.readFile(filespath[1] as string, "utf-8"),
        //     fs.readFile(filespath[2] as string, "utf-8"),
        // ]);
        // console.log(filespath);
        // console.log(filespath.map(path => fs.readFile(path, "utf-8")))
        const results = await Promise.all(filespath.map(path => fs.readFile(path, "utf-8")))
        await fs.writeFile(fileResulPath, results.join("\n"));
    }
    catch(error) {
        if(error instanceof Error) {
            console.log(`File copy error ${error.message}`);
        }
    }
    finally {
        console.log("Copy file process finished")
    }
};

copyFilesData("file5.txt", "file.txt", "file2.txt", "file3.txt");
