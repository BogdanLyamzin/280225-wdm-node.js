import HttpError from "../utils/HttpError.js";

import {
  getContacts,
  getContactById,
  addContact,
  updateContactById,
  deleteContactById,
} from "../services/contacts.service.js";

import { contactFullSchema } from "../schemas/contact.schemas.js";


export const getContactsController = async (req, res) => {
  const result = await getContacts();
  res.json(result);
};

export const getContactByIdController = async (req, res) => {
  const { id } = req.params;
  const result = await getContactById(id);
  if (!result) throw HttpError(404, `Contact with id=${id} not found`);

  res.json(result);
};

export const addContactController = async (req, res) => {
    const {error} = contactFullSchema.safeParse(req.body);
    if(error) {
        const {message} = JSON.parse(error.message)[0];
        throw HttpError(400, message);
    }
  const result = await addContact(req.body); // Error("notNull Violation: contact.email cannot be null")
  res.status(201).json(result);
};

export const updateContactByIdController = async (req, res) => {
  const { id } = req.params;
  const result = await updateContactById(id, req.body);
  if (!result) throw HttpError(404, `Contact with id=${id} not found`);

  res.json(result);
};

export const deleteContactByIdController = async (req, res) => {
  const { id } = req.params;
  const result = await deleteContactById(id);
  if (!result) throw HttpError(404, `Contact with id=${id} not found`);

  // res.status(204).send();
  res.json(result);
};
