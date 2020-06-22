import React from "react";
import s from "./Dialogs.module.css";
import { Field, reduxForm } from "redux-form";

//TODO валидация отправки сообщения (не отправлять пустое)
const SendMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.sendMessage}>
      <Field component="textarea" name="newMessage" className={s.textarea} />
      <button className={s.sendBtn} >
        Send
      </button>
    </form>
  );
};

export default reduxForm({form: 'sendMessage'})(SendMessageForm)
