import fs from "node:fs";
import path from "node:path";

const tasksPath = path.resolve("src", "files", "tasks.txt");

const readTasksStream = fs.createReadStream(tasksPath, "utf-8");
// readTasksStream.on("data", chunk => {
//     console.log("chunk", chunk);
// })

// readTasksStream.on("end", ()=> {
//     console.log("Finish read file")
// })

// readTasksStream.on("error", error => {
//     console.log(error.message);
// })

const newTasksPath = path.resolve("src", "files", "new-tasks.txt");

const writeNewTasksStream = fs.createWriteStream(newTasksPath, "utf-8");
// writeNewTasksStream.write("Купить пироженных\n");
// writeNewTasksStream.write("Съесть пироженные\n");
// writeNewTasksStream.end("Запить пироженные кофе");
readTasksStream.pipe(writeNewTasksStream);