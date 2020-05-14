import React from "react";
import s from "./Contacts.module.css";
import icon from "../../assets/img/svg/message.svg";
import userImg from "../../assets/img/userImg.png";

const Contact = (props) => {
  const { id, photos, name, status, isFollowed } = props;

  const toggleFollow = (userID) => {
    props.toggleFollow(userID);
  };

  return (
    <div className={s.userCard}>
      <div className={s.userInfo}>
        <img
          className={s.avatar}
          src={photos.small ? photos.small : userImg}
          alt="avatar"
        />
        <h3 className={s.userName}>{name}</h3>
        <p className={s.userStatus}>{status}</p>
      </div>
      <div className={s.userActions}>
        <button
          className={s.followBtn}
          type="button"
          onClick={() => {
            toggleFollow(id);
          }}
        >
          {isFollowed ? "Followed" : "Follow"}
        </button>
        <button className={s.messageBtn} type="button">
          <img src={icon} alt="icon" />
        </button>
      </div>
    </div>
  );
};

export default Contact;
