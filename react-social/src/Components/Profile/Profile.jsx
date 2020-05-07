import React from "react";
import Avatar from "./Avatar/Avatar";
import Username from "./Username/Username";
import s from "./Profile.module.css";

function Profile(props) {
  const { avatar, username } = props;
  return (
    <div className={s.profile}>
      <div className={s.info}>
        <Avatar className={s.avatar} avatar={avatar} />
        <Username className={s.username} username={username} />
      </div>
      <div className={s.userInfo}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed distinctio
        quae repellendus quos voluptate nam sint dicta expedita totam sit.
      </div>
    </div>
  );
}

export default Profile;
