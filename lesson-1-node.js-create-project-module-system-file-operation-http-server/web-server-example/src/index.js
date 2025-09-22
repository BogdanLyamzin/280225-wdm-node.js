import {createServer} from "node:http";

const server = createServer((request, response)=> {
    response.setHeader("Content-Type", "text/html");
    switch(request.url) {
        case "/":
            response.end("<h1>Home page</h1>");
            break;
        case "/contacts":
            response.end("<h1>Contacts page</h1>");
            break;
        default:
            response.statusCode = 404;
            response.end(`<h1>${request.url} page not found</h1>`);
    }
    // console.log(request.url);
    // console.log(request.method);
    // console.log(request.headers);
    // response.setHeader("Content-Type", "text/html");
    // response.end("<h1>Home page</h1>");
    // response.setHeader("Content-Type", "application/json");
    // response.end(JSON.stringify({message: "Home page"}));
});

server.listen(3000, ()=> console.log("Server running on 3000 port"));