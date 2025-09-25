// import fs from "node:fs";

// const text = fs.readFileSync("./src/files/tasks.txt", "utf-8");
// console.log(text);

// fs.readFile("./src/files/tasks.txt", "utf-8", (error, text)=> {
//     if(error) {
//         return console.log(error);
//     }
//     // console.log(buffer.toString());
//     console.log(text);
// })

// fs.readFile("./src/files/category.webp", (error, buffer)=> {
//     if(error) {
//         return console.log(error);
//     }
//     console.log(buffer);
// })

import fs from "node:fs/promises";
import path from "node:path";

// const readPromise = fs.readFile("./src/files/tasks.txt", "utf-8");
// readPromise.then(text => console.log(text))
//     .catch(error => console.log(error));

// const fileOperation = async filePath => {
//     const text = await fs.readFile(filePath, "utf-8");
//     console.log(text)
// }

// fileOperation("./src/files/tasks.txt")
// const text = await fs.readFile("./src/files/tasks.txt", "utf-8");
// console.log(text);
// await fs.appendFile("./src/files/tasks.txt", "\nВзять еще одного кота");
// await fs.writeFile("./src/files/tasks.txt", "Как эти коты задолбали");
// await fs.appendFile("./src/files/tasks2.txt", "\nВзять еще одного кота");
// await fs.writeFile("./src/files/tasks3.txt", "Как эти коты задолбали");
// await fs.unlink("./src/files/tasks3.txt");
// const filepath = path.join("src", "files", "tasks.txt");
// console.log(filepath);
// const filepath = path.resolve("src", "files", "tasks.txt");
// console.log(filepath)
// const text = await fs.readFile(filepath, "utf-8");
// console.log(text)
/*
1. Сохранить абсолютный путь к файлу.
2. Прочитать файл как текстовый.
3. Распарсить его в виде массива объектов.
*/

// const productspath = path.resolve("src", "files", "products.json");
// const data = await fs.readFile(productspath, "utf-8");
// const products = JSON.parse(data);
// console.log(products)
// const oldTasksPath = path.resolve("src", "files", "myTasks.txt");
// const newTasksPath = path.resolve("src", "myTasks.txt");
const myTasksPath = path.resolve("src", "myTasks.txt");
const copyMyTasksPath = path.resolve("src", "copyMyTasks.txt");
// await fs.rename(oldTasksPath, newTasksPath);
await fs.copyFile(myTasksPath, copyMyTasksPath);