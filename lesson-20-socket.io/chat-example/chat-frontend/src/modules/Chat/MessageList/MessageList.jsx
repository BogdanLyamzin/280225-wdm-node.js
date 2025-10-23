import styles from "./MessageList.module.css";

const MessageList = ({items = []})=> {
    const elements = items.map(({id, username, type, message})=> {
        const className = type === "my" ? styles.myMessage : styles.otherMessage;
        return <p key={id} className={className}>{username}: {message}</p>
    })
    return <div className={styles.wrapper}>{elements}</div>
}

export default MessageList;