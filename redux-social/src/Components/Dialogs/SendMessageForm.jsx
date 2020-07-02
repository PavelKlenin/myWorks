import React from "react";
import s from "./Dialogs.module.css";
import { Field, reduxForm } from "redux-form";
import { required } from './../../utils/formValidations/messageFormValidation';

const SendMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.sendMessage}>
      <Field
        component="textarea"
        name="newMessage"
        className={s.textarea}
        validate={[required]}
      />
      <button className={s.sendBtn} disabled={props.submitting || props.pristine}>
        Send
      </button>
    </form>
  );
};

export default reduxForm({ form: "sendMessage" })(SendMessageForm);
