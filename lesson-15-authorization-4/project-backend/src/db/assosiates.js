import Category from "./models/Category.js";
import User from "./models/User.js";
import Contact from "./models/Contact.js";

User.hasMany(Contact, {
    foreignKey: "userId",
    as: "contacts"
})

Contact.belongsTo(User, {
    foreignKey: "id",
    as: "user"
});


Category.hasMany(Contact, {
    foreignKey: "categoryId",
    as: "categories"
})

Contact.belongsTo(Category, {
    foreignKey: "id",
    as: "category"
});

