import { useEffect, useState } from "react";
import {useSelector} from "react-redux";

import ContactAddForm from "./ContactAddForm/ContactAddForm";
import ContactList from "./ContactList/ContactList";

import { getContactsApi, addContactApi } from "../../shared/api/contacts-api";

const MyContacts = ()=> {
    const [contacts, setContacts] = useState([]);
    const token = useSelector(store => store.auth.token);

    useEffect(()=> {
        const fetchContacts = async()=> {
            try {
                const data = await getContactsApi(token);
                setContacts(data);
            }
            catch(error) {
                console.log(error.message);
            }
        }

        fetchContacts();
    }, [token]);

    const addContact = async payload => {
        try {
            const data = await addContactApi(payload, token);
            setContacts(prevContacts => [...prevContacts, data]);
        }
        catch(error) {
            console.log(error.message);
        }
    }

    return (
        <div>
            <ContactAddForm submitForm={addContact} />
            <ContactList items={contacts} />
        </div>
    )
}

export default MyContacts;