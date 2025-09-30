import express from "express";
import cors from "cors";
import "dotenv/config";

import products from "./data/products.js";

const {PORT} = process.env;

const app = express(); // app - web-server

app.use(cors());
// const corsMiddleware = cors();
// app.use(corsMiddleware);

// const cors = options => {
//     const corsMiddleware = (request, response, next)=> {
//         // add options
//         response.setHeader("Access-Control-Allow-Origin", "*");
//         response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
//         response.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
//         response.setHeader("Access-Control-Allow-Credentials", true);
//         next();
//     };

//     return corsMiddleware;
// }

// app.use((request, response, next)=> {
    // response.setHeader("Access-Control-Allow-Origin", "*");
    // response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    // response.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    // response.setHeader("Access-Control-Allow-Credentials", true);
    // next();
// })

// app.set("json spaces", 20);

// app.use((request, response, next)=> {
//     console.log("First middleware");
//     next();
// })

// app.use((request, response, next)=> {
//     console.log("Second middleware");
//     next();
// })

app.get("/", (request, response)=> {
    response.send("<h1>Home page</h1>");
    console.log("After send response");
});

app.get("/contacts", (request, response)=> {
    console.log(request.method);
    console.log(request.url);
    // console.log(request.headers);
    const userAgent = request.get("User-Agent");
    console.log(userAgent);
    response.send("<h1>Contacts page</h1>");
});

app.get("/products", (request, response)=> {
    const databaseResponse = null;
    response.json(products);
    // response.send(products);
    // response.json(databaseResponse);
    // response.send(databaseResponse);
})

app.post("/products", (request, response)=> {
    response.status(201).json(products[0]);
})

app.use((request, response)=> {
    response.status(404).json({
        message: `${request.url} not found`
    })
})

const port = Number(PORT) || 3000;

app.listen(port, ()=> console.log(`Server running on ${port} port`));