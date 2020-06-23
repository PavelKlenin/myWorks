import React from "react";
import Avatar from './../common/Avatar/Avatar';
import s from "./Dialogs.module.css";

const DialogContact = (props) => {
  return (
    <div className={s.user}>
      <Avatar avatar={props.avatar} />
      <p>{props.name}</p>
    </div>
  );
};

export default DialogContact;
