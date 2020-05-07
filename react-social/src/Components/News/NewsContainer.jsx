import React from "react";
import { changePostCreator, sendPostCreator } from "../../Redux/newsReducer";
import News from "./News";

function NewsContainer(props) {
  const { dispatch, ...news } = props;

  const updatePostText = (text) => {
    dispatch(changePostCreator(text));
  };

  const sendPost = () => {
    dispatch(sendPostCreator());
  };

  return (
    <News
      updatePostText={updatePostText}
      sendPost={sendPost}
      {...news}
    />
  );
}

export default NewsContainer;
