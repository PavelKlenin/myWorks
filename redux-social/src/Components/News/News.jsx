import React from "react";
import Post from "./Post/Post";
import s from "./News.module.css";
import NewPostForm from "./NewPostForm";

const News = (props) => {
  const { posts, avatar } = props;
  const postList = posts.map((post) => (
    <Post post={post.text} avatar={avatar} key={post.id} />
  ));

  const sendPost = (values) => {
    props.sendPost(values.newPostText);
  };

  return (
    <div className={s.news}>
      <div className={s.posts}>{postList}</div>
      <NewPostForm onSubmit={sendPost} />
    </div>
  );
}

export default News;
