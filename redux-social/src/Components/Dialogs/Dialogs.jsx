import React from "react";
import s from "./Dialogs.module.css";
import DialogContact from "./DialogContact";
import Message from "./Message";
import SendMessageForm from "./SendMessageForm";

function Dialogs(props) {
  const userList = props.contacts.map((user) => (
    <DialogContact {...user} key={user.id} />
  ));
  const messageList = props.messages.map((message, index) => (
    <Message message={message} key={index} />
  ));

  const sendMessage = (values) => {
    props.sendMessage(values.newMessage);
    props.reset("sendMessage");
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
