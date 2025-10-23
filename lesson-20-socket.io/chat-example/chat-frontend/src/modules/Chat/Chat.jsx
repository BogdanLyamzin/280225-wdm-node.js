import { useState } from "react";
import { nanoid } from "nanoid";
import io from "socket.io-client";

import UserConnectForm from "./UserConnectForm/UserConnectForm";
import ChatMessageForm from "./ChatMessageForm/ChatMessageForm";
import MessageList from "./MessageList/MessageList";

const {VITE_CHAT_URL} = import.meta.env;

const Chat = () => {
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  const addUsername = ({ username }) => {
    setUsername(username);
    const socket = io.connect(VITE_CHAT_URL);
    setSocket(socket);
    socket.on("receive_message", data => {
      setMessages((prevMessages) => {
        const newMessage = {
          id: nanoid(),
          message: data.message,
          type: "other",
          username: data.username,
        };
        return [...prevMessages, newMessage];
      });
    });
  };

  const addMessage = ({ message }) => {
    setMessages((prevMessages) => {
      const newMessage = {
        id: nanoid(),
        message,
        type: "my",
        username,
      };
      return [...prevMessages, newMessage];
    });
    socket.emit("send_message", {username, message});
  };
  
  const closeChat = ()=> {
    setUsername("");
    socket.off("receive_message");
    socket.disconnect();
    setSocket(null);
  }

  return (
    <div>
      {!username && <UserConnectForm submitForm={addUsername} />}
      {username && <ChatMessageForm submitForm={addMessage} />}
      {username && <MessageList items={messages} />}
      {(username && socket) && <button onClick={closeChat} type="button">Close chat</button>}
    </div>
  );
};

export default Chat;
