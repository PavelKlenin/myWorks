import React from "react";
import s from "./Dialogs.module.css";
import DialogContact from "./DialogContact";
import Message from "./Message";
import SendMessageForm from "./SendMessageForm";

function Dialogs(props) {
  const { users, messages } = props.dialogs;
  const userList = users.map((user) => <DialogContact {...user} key={user.id} />);
  const messageList = messages.map((message, index) => (
    <Message message={message} key={index} />
  ));

  const sendMessage = (values) => {
    props.sendMessage(values.newMessage);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.users}>{userList}</div>
      <div className={s.chat}>
        <div className={s.messages}>{messageList}</div>
        <SendMessageForm onSubmit={sendMessage} />
      </div>
    </div>
  );
}

export default Dialogs;
