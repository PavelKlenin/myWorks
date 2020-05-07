import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

function Dialogs(props) {
  const { users, messages, newMessage } = props.dialogs;
  const userList = users.map((user) => <Dialog {...user} key={user.id} />);
  const messageList = messages.map((message, index) => (
    <Message message={message} key={index} />
  ));

  const messageText = React.createRef();

  const changeMessage = () => {
    props.changeMessage(messageText.current.value);
  };

  const sendMessage = () => {
    props.sendMessage();
  };

  return (
    <div className={s.dialogs}>
      <div className={s.users}>{userList}</div>
      <div className={s.chat}>
        <div className={s.messages}>{messageList}</div>
        <div className={s.sendMessage}>
          <textarea
            value={newMessage}
            className={s.textarea}
            onChange={changeMessage}
            ref={messageText}
          ></textarea>
          <button type="button" className={s.sendBtn} onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
