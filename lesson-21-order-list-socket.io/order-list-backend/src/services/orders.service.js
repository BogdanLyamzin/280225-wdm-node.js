import Order from "../db/models/Order.js";

export const getOrders = ()=> Order.find();

export const addOrder = async (payload )=> Order.create(payload);