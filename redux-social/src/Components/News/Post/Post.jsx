import React from "react";
import Avatar from "../../Profile/Avatar/Avatar";
import s from "./Post.module.css";

function Post(props) {
  return (
    <div className={s.post}>
      <div className={s.avatar}>
        <Avatar avatar={props.avatar}/>
      </div>
      <div className={s.postText}>{props.post}</div>
    </div>
  );
}

export default Post;
