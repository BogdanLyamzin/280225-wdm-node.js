// import fs from "node:fs";
// import fs from "fs/promises";
import fs from "node:fs/promises";
import DetectFileEncodingAndLanguage from "detect-file-encoding-and-language";

// const fileOperations = async ()=> {
//     const data = await fs.readFile("./src/files/tasks.txt");
//     console.log(data);
// }
// fileOperations();
// const buffer = await fs.readFile("./src/files/tasks.txt");
// const text = buffer.toString();
// console.log(text);

// const text = await fs.readFile("./src/files/tasks.txt", "utf-8");
// console.log(text);
// const {encoding} = await DetectFileEncodingAndLanguage("./src/files/tasks.txt");
// const text = await fs.readFile("./src/files/tasks.txt", encoding);
// console.log(text);
// await fs.appendFile("./src/files/tasks.txt", "\n2. Задеплоить проект");
// await fs.writeFile("./src/files/tasks.txt", "Полностью переделать проект!!!");
// await fs.readFile("./src/files/tasks2.txt", "utf-8");
// await fs.appendFile("./src/files/tasks2.txt", "\n2. Задеплоить проект");
// await fs.writeFile("./src/files/tasks3.txt", "Полностью переделать проект!!!");
await fs.unlink("./src/files/tasks3.txt");
// fs.readFile("./src/files/tasks.txt")
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// fs.readFile("./src/files/tasks.txt", (error, data)=> {
//     console.log(error);
//     console.log(data);
//     fs.writeFile("./src/files/copy-tasks.txt", ()=>{})
// })