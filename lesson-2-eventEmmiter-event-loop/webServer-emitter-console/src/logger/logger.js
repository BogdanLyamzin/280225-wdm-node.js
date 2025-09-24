import EventEmitter from "node:events";
import fs from "node:fs/promises";

const emitter = new EventEmitter();

const getCurrentISODate = () => new Date().toISOString();

emitter.on("success-request", async ({ method, url }) => {
  // console.log(`${method} ${url}`);
  await fs.appendFile(
    "./src/logger/log.txt",
    `SUCCESS ${getCurrentISODate()} ${method} ${url}\n`
  );
});

emitter.on("error-request", async ({ method, url }) => {
  // console.error(`${method} ${url}`);
  await fs.appendFile(
    "./src/logger/log.txt",
    `ERROR ${getCurrentISODate()} ${method} ${url}\n`
  );
});

export const logSuccessRequest = (request) =>
  emitter.emit("success-request", request);
export const logErrorRequest = (request) =>
  emitter.emit("error-request", request);
