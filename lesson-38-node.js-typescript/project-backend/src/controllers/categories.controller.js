import { getCategories, getCategoriesWithDetails, addCategory } from "../services/categories.service.js";

import validateBody from "../utils/validateBody.js";

import { categoryFullSchema } from "../schemas/category.schemas.js";

export const getCategoriesController = async(req, res)=> {
    const result = await getCategories();
    res.json(result);
}

export const getCategoriesWithDetailsController = async(req, res)=> {
    const result = await getCategoriesWithDetails();
    res.json(result);
}

export const addCategoryController = async(req, res)=> {
    validateBody(categoryFullSchema, req.body);
    const result = await addCategory(req.body); // throw new Error()
    res.status(201).json(result);
}