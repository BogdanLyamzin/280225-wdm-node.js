import Category from "../db/models/Category.js";
import Contact from "../db/models/Contact.js";

export const getCategories = ()=> Category.findAll()

export const getCategoriesWithDetails = ()=> Category.findAll({
    include: {
        model: Contact,
        as: "contacts"
    }
})

export const addCategory = payload => Category.create(payload);