import {createServer} from "node:http";

import { logSuccessRequest, logErrorRequest } from "./logger/logger.js";

const server = createServer((request, response)=> {
    response.setHeader("Content-Type", "text/html");
    switch(request.url) {
        case "/":
            logSuccessRequest(request);
            return response.end("<h1>Home page</h1>");
        case "/contacts":
            logSuccessRequest(request);
            return response.end("<h1>Conacts page</h1>");
        default:
            logErrorRequest(request);
            response.statusCode = 404;
            return response.end("<h1>Page not found</h1>");
    }
});

server.listen(3000, ()=> console.log("Server running on 3000 port"));

