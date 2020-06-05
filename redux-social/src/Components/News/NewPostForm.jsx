import React from "react";
import s from "./News.module.css";

const NewPostForm = (props) => {
  const maxValue = props.validate.maxValue(props.maxLength);

  const updatePost = (e) => {
    const text = e.currentTarget.value;
    props.updatePost(text);
    props.checkPostBtn(props.validate.disableSendBtn(text));
    props.checkPostLength(maxValue(text));
  };

  const sendPost = (e) => {
    e.preventDefault();
    props.sendPost();
  };

  return (
    <form onSubmit={sendPost} className={s.createPost}>
      {props.maxLengthError && <span className={s.textError}>`Must be ${props.maxLength} characters or less`</span> }
      <textarea
        className={props.maxLengthError && s.textareaError}
        value={props.postText}
        onChange={updatePost}
      />
      <button disabled={props.btnDisabled} className={s.sendBtn}>Send</button>
    </form>
  );
};

export default NewPostForm;
