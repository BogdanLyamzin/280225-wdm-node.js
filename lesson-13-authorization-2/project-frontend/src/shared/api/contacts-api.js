import axios from "axios";

const contactsInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/contacts`
});

export const getContactsApi = async token => {
    const {data} = await contactsInstance.get("/", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

export const addContactApi = async (payload, token) => {
    const {data} = await contactsInstance.post("/", payload, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}