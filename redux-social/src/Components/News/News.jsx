import React from "react";
import Post from "./Post/Post";
import s from "./News.module.css";

function News(props) {
  const { posts, avatar, newPostText } = props;
  const postList = posts.map((post) => (
    <Post post={post.text} avatar={avatar} key={post.id} />
  ));

  const postText = React.createRef();

  const updatePostText = () => {
    const updatedText = postText.current.value;
    props.updatePostText(updatedText);
  };

  const sendPost = () => {
    props.sendPost();
  };

  return (
    <div className={s.news}>
      <div className={s.posts}>{postList}</div>
      <div className={s.createPost}>
        <textarea
          value={newPostText}
          className={s.textarea}
          ref={postText}
          onChange={updatePostText}
        ></textarea>
        <button type="button" className={s.sendBtn} onClick={sendPost}>
          Send
        </button>
      </div>
    </div>
  );
}

export default News;
