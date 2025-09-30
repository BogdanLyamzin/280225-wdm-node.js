import express from "express";
import cors from "cors";
import "dotenv/config";

import productsRouter from "./routers/products.router.js";

const {PORT} = process.env;

const startServer = ()=> {
    const app = express();

    app.use(cors());

    app.use("/api/products", productsRouter);
   
    app.use((request, response)=> {
        response.status(404).json({
            message: `${request.url} not found`
        });
    });
    
    const port = Number(PORT) || 3000;
    
    app.listen(port, ()=> console.log(`Server running on ${port} port`));
}

export default startServer;