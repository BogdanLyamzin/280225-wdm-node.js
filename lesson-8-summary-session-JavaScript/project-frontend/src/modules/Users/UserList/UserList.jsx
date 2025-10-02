const UserList = ({items = []}) => {
    const elements = items.map(({name, email})=> <li key={name}>Name: {name}. Email: {email}.</li>);

    return <ol>{elements}</ol>
}

export default UserList;