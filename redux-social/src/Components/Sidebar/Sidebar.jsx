import React from "react";
import Avatar from "./../Profile/Avatar/Avatar";
import s from "./Sidebar.module.css";

const Sidebar = (props) => {
  return (
    <div className={s.sidebar}>
      <div className={s.avatar}>
        <Avatar avatar={props.avatar} />
      </div>
      <div className={s.username}>
        User Name
      </div>
    </div>
  );
};

export default Sidebar;
