import Contact from "../db/models/Contact.js";
import Category from "../db/models/Category.js";

export const getContacts = ()=> Contact.findAll({
    include: {
        model: Category,
        as: "category"
    }
});

export const getContactById = id => Contact.findByPk(id);
// export const getContactById = id => Contact.findOne({
//     where: {
//         id,
//     }
// });

export const addContact = payload => Contact.create(payload); // throw new ValidationError("notNull Violation: contact.email cannot be null")

export const updateContactById = async (id, payload)=> {
    const contact = await getContactById(id);
    if(!contact) return null;

    return contact.update(payload);
}

export const deleteContactById = async id => {
    const contact = await getContactById(id);
    if(!contact) return null;

    await contact.destroy();
    return contact;
}