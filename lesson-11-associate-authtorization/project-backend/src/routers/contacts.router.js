import { Router } from "express";

import {
  getContactsController,
  getContactByIdController,
  addContactController,
  updateContactByIdController,
  deleteContactByIdController,
} from "../controllers/contacts.controller.js";

const contactsRouter = Router();

contactsRouter.get("/", getContactsController);

contactsRouter.get("/:id", getContactByIdController);
// contactsRouter.get("/:id", (req, res, next)=> {
//   try {
//     getContactByIdController(req, res, next); // throw new Error(`Contact with id=${id} not found`)
//   }
//   catch(error) {
//     // передаем ошибку в обработчик ошибок - middleware с 4 параметрами
//   }
// });

contactsRouter.post("/", addContactController);

contactsRouter.put("/:id", updateContactByIdController);

contactsRouter.delete("/:id", deleteContactByIdController);

export default contactsRouter;
