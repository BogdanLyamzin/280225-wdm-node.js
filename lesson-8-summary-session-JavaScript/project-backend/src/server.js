import express from "express";
import cors from "cors";

import notFoundHandler from "./middlewares/notFoundHandler.js";
import errorHandler from "./middlewares/errorHandler.js";

import usersRouter from "./routers/users.router.js";

const startServer = ()=> {
    const app = express();

    app.use(cors());
    // app.use((req, res, next)=> {
    //     if(req.method === "PUT") {

    //     }
    //     next()
    // })
    // app.use((req, res)=> {
    //     // const Authorization = req.get("Authorization");
    //     // const {authorization} = req.headers;
    //     console.log("Authorization", authorization);
    // })
    app.use(express.json());

    app.use("/api/users", usersRouter);

    app.use(notFoundHandler);
    app.use(errorHandler);

    const port = Number(process.env.PORT) || 3000;
    app.listen(port, ()=> console.log(`Server running on ${port} port`));
}

export default startServer;