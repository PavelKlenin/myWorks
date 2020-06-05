import React from "react";
import Post from "./Post/Post";
import s from "./News.module.css";
import NewPostForm from "./NewPostForm";

const News = (props) => {
  const { posts, avatar } = props;
  const postList = posts.map((post) => (
    <Post post={post.text} avatar={avatar} key={post.id} />
  ));

  return (
    <div className={s.news}>
      <div className={s.posts}>{postList}</div>
      <NewPostForm
        btnDisabled={props.btnDisabled}
        checkForm={props.checkForm}
        sendPost={props.sendPost}
        updatePost={props.updatePostText}
        postText={props.newPostText}
      />
    </div>
  );
};

export default News;
