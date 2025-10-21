import HttpError from "../utils/HttpError.js";

import {
  getContacts,
  getContactById,
  addContact,
  updateContactById,
  deleteContactById,
} from "../services/contacts.service.js";

import { contactFullSchema } from "../schemas/contact.schemas.js";

import validateBody from "../utils/validateBody.js";

export const getContactsController = async (req, res) => {
  const {id: owner} = req.user;
  const result = await getContacts({owner});
  res.json(result);
};

export const getContactByIdController = async (req, res) => {
  const { id } = req.params;
  const result = await getContactById(id);
  if (!result) throw HttpError(404, `Contact with id=${id} not found`);

  res.json(result);
};

export const addContactController = async (req, res) => {
  console.log(req.body);
  validateBody(contactFullSchema, req.body); 
  const {id: owner} = req.user;
  const result = await addContact({...req.body, owner}); 
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
