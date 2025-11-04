import * as fs from "node:fs/promises";
import path from "node:path";

import Contact from "../db/models/Contact.js";

export const getContacts = (query) =>
  Contact.find(query)
    .populate("category", "-createdAt -updatedAt")
    .populate("owner", "username");

export const getContactById = (id) => Contact.findById(id);

export const addContact = async (payload, file) => {
  const newPath = path.resolve("public", "contacts", file.filename);
  await fs.rename(file.path, newPath);
  const photo = file ? path.join("contacts", file.filename) : "";
  return Contact.create({...payload, photo});
};

export const updateContactById = async (id, payload) =>
  Contact.findByIdAndUpdate(id, payload);

export const deleteContactById = async (id) => Contact.findByIdAndDelete(id);
