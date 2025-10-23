import { Router } from "express";

import { getOrdersController, addOrderController } from "../controllers/orders.controller.js";

const categoriesRouter = Router();

categoriesRouter.get("/", getOrdersController);

categoriesRouter.post("/", addOrderController);

export default categoriesRouter;