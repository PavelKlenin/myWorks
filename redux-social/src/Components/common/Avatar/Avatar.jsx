import React from "react";
import avatar from "../../../assets/img/avatar.jpg";

const Avatar = (props) => {
  return (
    <img
      className={props.nameOfClass}
      src={props.avatar ? props.avatar : avatar}
      alt="avatar"
    />
  );
};

export default Avatar;
