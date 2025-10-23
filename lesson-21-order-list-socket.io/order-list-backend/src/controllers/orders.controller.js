import { getOrders,  addOrder } from "../services/orders.service.js";

import validateBody from "../utils/validateBody.js";

import { orderFullSchema } from "../schemas/order.schemas.js";

export const getOrdersController = async(req, res)=> {
    const result = await getOrders();
    res.json(result);
}

export const addOrderController = async(req, res)=> {
    validateBody(orderFullSchema, req.body);
    const result = await addOrder(req.body); 
    res.status(201).json(result);
}