import { Schema, model } from "mongoose";

import { handleSaveError, setUpdateSettings } from "../hooks.js";

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    }
}, {versionKey: false, timestamps: true});

categorySchema.post("save", handleSaveError);

categorySchema.pre("findOneAndUpdate", setUpdateSettings);

categorySchema.post("findOneAndUpdate", handleSaveError);
  
const Category = model("category", categorySchema);

export default Category;