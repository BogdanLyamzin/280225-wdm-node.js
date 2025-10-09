import Category from "./models/Category.js";
import Contact from "./models/Contact.js";

Category.hasMany(Contact, {
    foreignKey: "categoryId",
    as: "contacts"
})

Contact.belongsTo(Category, {
    foreignKey: "id",
    as: "category"
});