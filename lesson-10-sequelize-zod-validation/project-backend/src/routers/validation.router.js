import { Router } from "express";

import { getValidationRulesController } from "../controllers/validation.controller.js";

const validationRouter = Router();

validationRouter.get("/", getValidationRulesController);

export default validationRouter;