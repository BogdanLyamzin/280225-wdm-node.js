import {Router} from "express";

import products from "../data/products.js";

const productsRouter = Router();

productsRouter.get("/", (req, res)=> {
    res.json(products);
});

productsRouter.get("/:id", (req, res)=> {
    res.json(products[0]);
})

productsRouter.post("/", (req, res)=> {
    res.status(201).json(products[0]);
})

productsRouter.put("/:id", (req, res)=> {
    res.json(products[0]);
})

productsRouter.delete("/:id", (req, res)=> {
    res.status(204).send();
})

export default productsRouter;