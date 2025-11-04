import { Router } from "express";
import { getContactsController, getContactByIdController, addContactController, updateContactByIdController, deleteContactByIdController, } from "../controllers/contacts.controller.js";
import authenticate from "../middlewares/authenticate.js";
import upload from "../middlewares/upload.js";
const contactsRouter = Router();
contactsRouter.use(authenticate);
contactsRouter.get("/", getContactsController);
contactsRouter.get("/:id", getContactByIdController);
// upload.fields([
//   {
//     name: "photo",
//     maxCount: 1
//   },
//   {
//     name: "additionalPhotos",
//     maxCount: 2
//   }
// ])
// upload.array("photo", 8);
contactsRouter.post("/", upload.single("photo"), addContactController);
contactsRouter.put("/:id", updateContactByIdController);
contactsRouter.delete("/:id", deleteContactByIdController);
export default contactsRouter;
//# sourceMappingURL=contacts.router.js.map