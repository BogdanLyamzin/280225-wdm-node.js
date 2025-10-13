import Category from "./models/Category.js";
import User from "./models/User.js";
import Contact from "./models/Contact.js";

User.hasMany(Contact, {
    foreignKey: "categoryId",
    as: "contacts"
})

Category.hasMany(Contact, {
    foreignKey: "categoryId",
    as: "contacts"
})

Contact.belongsTo(Category, {
    foreignKey: "id",
    as: "category"
});