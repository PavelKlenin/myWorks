import React from "react";
import s from "./News.module.css";

const NewPostForm = (props) => {
  const updatePost = (e) => {
    const text = e.currentTarget.value;
    props.updatePost(text);
    props.checkPost(props.maxLength, text);
  };

  const sendPost = (e) => {
    e.preventDefault();
    props.sendPost();
    props.checkPost();
  };

  const stopInput = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={sendPost} className={s.createPost}>
      {props.maxLengthError && (
        <span className={s.textError}>
          Post should be {props.maxLength} characters or less
        </span>
      )}
      <textarea
        className={props.maxLengthError ? s.textareaError : undefined}
        value={props.postText}
        onChange={updatePost}
        onKeyPress={props.maxLengthError ? stopInput : undefined}
      />
      <button disabled={props.btnDisabled} className={s.sendBtn}>
        Send
      </button>
    </form>
  );
};

export default NewPostForm;
