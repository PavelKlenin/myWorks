import React from "react";
import s from "./News.module.css";

const NewPostForm = (props) => {
  // const maxValue50 = props.checkForm(50);

  const updatePost = (e) => {
    const text = e.currentTarget.value;
    props.updatePost(text);
    props.checkForm(text);
  };

  const sendPost = (e) => {
    e.preventDefault();
    props.sendPost();
  };

  return (
    <form onSubmit={sendPost} className={s.createPost}>
      <textarea
        className={s.textarea}
        value={props.postText}
        onChange={updatePost}
      />
      <button disabled={props.btnDisabled} className={s.sendBtn}>Send</button>
    </form>
  );
};

export default NewPostForm;
