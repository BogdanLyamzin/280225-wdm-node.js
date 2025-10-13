import Contact from "../db/models/Contact.js";
import Category from "../db/models/Category.js";

export const getContacts = query => Contact.findAll({
    where: query,
    include: {
        model: Category,
        as: "category"
    }
});

export const getContactById = id => Contact.findByPk(id);

export const addContact = payload => {
    console.log(payload);
    return Contact.create(payload);
};


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