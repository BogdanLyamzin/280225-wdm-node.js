import { Router } from "express";

import { getCategoriesController, getCategoriesWithDetailsController, addCategoryController } from "../controllers/categories.controller.js";

const categoriesRouter = Router();

categoriesRouter.get("/details", getCategoriesWithDetailsController);

categoriesRouter.get("/", getCategoriesController);

categoriesRouter.post("/", addCategoryController);
// categoriesRouter.post("/", (req, res, next) => {
//     try {
//         addCategoryController(req, res, next);  // throw new Error()
//     }
//     catch(error) {
//         // передаем error в middleware обработки ошибок - ищем middleware с 4 параметрами - у нас это errorHandler
//     }
// });

export default categoriesRouter;