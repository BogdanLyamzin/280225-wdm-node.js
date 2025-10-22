import { Router } from "express";

import {
  getContactsController,
  getContactByIdController,
  addContactController,
  updateContactByIdController,
  deleteContactByIdController,
} from "../controllers/contacts.controller.js";

import authenticate from "../middlewares/authenticate.js";

const contactsRouter = Router();

contactsRouter.use(authenticate);

contactsRouter.get("/", getContactsController);

contactsRouter.get("/:id", getContactByIdController);

contactsRouter.post("/", addContactController);

contactsRouter.put("/:id", updateContactByIdController);

contactsRouter.delete("/:id", deleteContactByIdController);

export default contactsRouter;
