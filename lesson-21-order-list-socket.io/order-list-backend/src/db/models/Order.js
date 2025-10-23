import { Schema, model } from "mongoose";

import { handleSaveError, setUpdateSettings } from "../hooks.js";

const orderSchema = new Schema({
    status: {
        type: String,
        enum: ["new", "processing", "delivered"],
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
}, {versionKey: false, timestamps: true});

orderSchema.post("save", handleSaveError);

orderSchema.pre("findOneAndUpdate", setUpdateSettings);

orderSchema.post("findOneAndUpdate", handleSaveError);
  
const Order = model("order", orderSchema);



export default Order;