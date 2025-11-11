import {Schema, model, Document} from "mongoose";

import { email } from "../../constants/validation.js";

import { handleSaveError, setUpdateSettings } from "../hooks.js";

export interface UserDocument extends Document {
  username: string;
  email: string;
  password: string;
  verify: boolean;
  token: string | null;
  createdAt: Date;
  updateAt: Date;
}

const userSchema = new Schema<UserDocument>({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    match: email.value,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  verify: {
    type: Boolean,
    default: false,
    required: true,
  },
  token: {
    type: String,
    required: false,
  },
}, {versionKey: false, timestamps: true});

userSchema.post("save", handleSaveError);

userSchema.pre("findOneAndUpdate", setUpdateSettings);

userSchema.post("findOneAndUpdate", handleSaveError);

const User = model<UserDocument>("user", userSchema);

export default User;

