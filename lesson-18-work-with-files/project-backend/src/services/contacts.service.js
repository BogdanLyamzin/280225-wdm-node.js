import Contact from "../db/models/Contact.js";

export const getContacts = (query) =>
  Contact.find(query)
    .populate("category", "-createdAt -updatedAt")
    .populate("owner", "username");

export const getContactById = (id) => Contact.findById(id);

export const addContact = (payload) => Contact.create(payload);

export const updateContactById = async (id, payload) =>
  Contact.findByIdAndUpdate(id, payload);

export const deleteContactById = async (id) => Contact.findByIdAndDelete(id);
