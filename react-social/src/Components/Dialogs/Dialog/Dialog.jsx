import React from "react";
import Avatar from '../../Profile/Avatar/Avatar'
import s from "./../Dialogs.module.css";

const Dialog = (props) => {
  return (
    <div className={s.user}>
      <Avatar avatar={props.avatar} />
      <p>{props.name}</p>
    </div>
  );
};

export default Dialog;
