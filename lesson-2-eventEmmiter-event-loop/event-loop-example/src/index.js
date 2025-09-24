import axios from "axios";
import fs from "node:fs/promises";

console.log("Start"); // 1 сихнронный код

setTimeout(()=> console.log("Set timeout"), 0); // 5 timer phase

setImmediate(()=> console.log("Immediate")); // 8 setImmediate phase

Promise.resolve().then(()=> console.log("Micro tasks")); // 3 microTasks phase

axios.get("https://jsonplaceholder.typicode.com/posts") // 6-7 I/O phase
 .then(({data})=> console.log("Axios response"));

fs.readFile("./src/file.txt", "utf-8") // 6-7 I/O phase 
    .then(text => console.log(text))
    .catch(error => console.log(error.message));
 
process.nextTick(()=> console.log("Next tick")); // 4 microTasks phase

console.log("End"); // 2 сихнронный код

/*
// Весь синхронный код
console.log("Start");
console.log("End");

// Действия, отправленные в event loop
// micro tasks
Promise.resolve().then(()=> console.log("Micro tasks"));
process.nextTick(()=> console.log("Next tick"));
// timers если время пришло на момент когда ты до них дошел
setTimeout(()=> console.log("Set timeout"), 0);
// I/O 
 fs.readFile("./src/file.txt", "utf-8") 
    .then(text => console.log(text))
    .catch(error => console.log(error.message));
axios.get("https://jsonplaceholder.typicode.com/posts") 
 .then(({data})=> console.log("Axios response"));
// setImmediate
setImmediate(()=> console.log("Immediate"));
*/