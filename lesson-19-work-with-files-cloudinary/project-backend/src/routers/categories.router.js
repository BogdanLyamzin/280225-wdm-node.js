import { Router } from "express";

import { getCategoriesController, getCategoriesWithDetailsController, addCategoryController } from "../controllers/categories.controller.js";

import authenticate from "../middlewares/authenticate.js";

const categoriesRouter = Router();

categoriesRouter.use(authenticate);

categoriesRouter.get("/details", getCategoriesWithDetailsController);

categoriesRouter.get("/", getCategoriesController);

categoriesRouter.post("/", addCategoryController);

export default categoriesRouter;