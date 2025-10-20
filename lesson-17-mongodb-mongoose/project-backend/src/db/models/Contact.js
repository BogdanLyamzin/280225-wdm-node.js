import {Schema, model} from "mongoose";

import { phone, email } from "../../constants/validation.js";

import { handleSaveError, setUpdateSettings } from "../hooks.js";

const contactSchema = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    match: phone.value,
  },
  email: {
    type: String,
    required: true,
    match: email.value,
  },
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "category"
  },
  owner: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "user"
  }
}, {versionKey: false, timestamps: true});


contactSchema.post("save", handleSaveError);

contactSchema.pre("findOneAndUpdate", setUpdateSettings);

contactSchema.post("findOneAndUpdate", handleSaveError);

const Contact = model("contact", contactSchema);

export default Contact;
