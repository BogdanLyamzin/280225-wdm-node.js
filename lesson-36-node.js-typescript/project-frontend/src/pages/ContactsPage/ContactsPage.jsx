import Container from '@mui/material/Container';

import MyContacts from "../../modules/MyContacts/MyContacts";

const ContactsPage = ()=> {
    return (
    <main>
        <Container>
        <h1>My contacts</h1>
        <MyContacts />
        </Container>

    </main>
    )
}

export default ContactsPage;