import React from "react";
import {
  sendMessageCreator,
  changeMessageCreator,
} from "../../Redux/dialogsReducer.js";
import Dialogs from "./Dialogs";

function DialogsContainer(props) {
  const { dispatch } = props;

  const changeMessage = (text) => {
    const action = changeMessageCreator(text);
    dispatch(action);
  };
  
  const sendMessage = () => {
    const action = sendMessageCreator();
    dispatch(action);
  };

  return (
    <Dialogs changeMessage={changeMessage}
    sendMessage={sendMessage}
    {...props.dialogs} />
  );
}

export default DialogsContainer;
