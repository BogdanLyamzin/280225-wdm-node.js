import { Router } from "express";

import {
  getUsersController,
  addUserController,
} from "../controllers/users.controller.js";

const usersRouter = Router();

usersRouter.get("/", getUsersController);

usersRouter.post("/", addUserController);

export default usersRouter;
