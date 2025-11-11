import Category from "../db/models/Category.js";
import HttpError from "../utils/HttpError.js";
export const getCategories = () => Category.find();
export const getCategoriesWithDetails = () => Category.find();
export const addCategory = async (payload) => {
    const category = await Category.find({ name: payload.name });
    if (category)
        throw HttpError(409, "Category already created");
    return Category.create(payload);
};
//# sourceMappingURL=categories.service.js.map