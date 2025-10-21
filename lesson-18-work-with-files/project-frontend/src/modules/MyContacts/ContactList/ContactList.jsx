const ContactList = ({items = []}) => {
    const elements = items.map(({id, fullname, phone, email})=> <li key={id}>
        <p>{fullname}</p>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
    </li>);

    return <ol>{elements}</ol>
}

export default ContactList;