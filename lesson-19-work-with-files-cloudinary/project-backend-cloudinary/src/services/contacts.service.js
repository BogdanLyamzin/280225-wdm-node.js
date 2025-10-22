import * as fs from "node:fs/promises";
import path from "node:path";

import Contact from "../db/models/Contact.js";

import cloudinary from "../utils/cloudinary.js";

export const getContacts = (query) =>
  Contact.find(query)
    .populate("category", "-createdAt -updatedAt")
    .populate("owner", "username");

export const getContactById = (id) => Contact.findById(id);

export const addContact = async (payload, file) => {
  let photo = "";
  if(file) {
    const {url} = await cloudinary.uploader.upload(file.path, {
      folder: "contacts",
      use_filename: true,
    });
    photo = url;
    await fs.unlink(file.path);
  }
  return Contact.create({...payload, photo});
};

export const updateContactById = async (id, payload) =>
  Contact.findByIdAndUpdate(id, payload);

export const deleteContactById = async (id) => Contact.findByIdAndDelete(id);
