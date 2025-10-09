import { Router } from "express";

import { getCategoriesController, getCategoriesWithDetailsController, addCategoryController } from "../controllers/categories.controller.js";

const categoriesRouter = Router();

categoriesRouter.get("/details", getCategoriesWithDetailsController);

categoriesRouter.get("/", getCategoriesController);

categoriesRouter.post("/", addCategoryController);

export default categoriesRouter;