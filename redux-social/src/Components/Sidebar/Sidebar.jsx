import React from "react";
import Avatar from "./../Profile/Avatar/Avatar";
import Username from "./../Profile/Username/Username";
import s from "./Sidebar.module.css";

const Sidebar = (props) => {
  const { avatar, username } = props;
  return (
    <div className={s.sidebar}>
      <div className={s.avatar}>
        <Avatar avatar={avatar} />
      </div>
      <div className={s.username}>
        <Username username={username} />
      </div>
    </div>
  );
};

export default Sidebar;
