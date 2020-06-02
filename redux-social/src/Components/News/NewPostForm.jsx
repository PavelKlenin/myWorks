import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./News.module.css";

const NewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.createPost}>
      <Field component="textarea" name="newPostText" className={s.textarea} />
      <button className={s.sendBtn}>Send</button>
    </form>
  );
};

export default reduxForm({ form: "postText" })(NewPostForm);
