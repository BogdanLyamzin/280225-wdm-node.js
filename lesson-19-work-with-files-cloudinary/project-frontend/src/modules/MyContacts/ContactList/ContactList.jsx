const {VITE_FILES_URL: filesPath} = import.meta.env;

const ContactList = ({ items = [] }) => {
  const elements = items.map(({ id, fullname, phone, email, photo }) => (
    <li key={id}>
      {photo && <img width={200} src={`${filesPath}/${photo}`} alt={fullname} />}
      <p>{fullname}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
    </li>
  ));

  return <ol>{elements}</ol>;
};

export default ContactList;
