import React from "react";
import s from "./Contacts.module.css";
import icon from "../../assets/img/svg/message.svg";
import { NavLink } from "react-router-dom";
import Avatar from "../Profile/Avatar/Avatar";

const Contact = (props) => {
  const { id, photos, name, status, isFollowed } = props;

  const toggleFollow = (userID) => {
    props.toggleFollow(userID);
  };

  return (
    <div className={s.userCard}>
      <NavLink to={`/profile/${id}`} className={s.userInfo}>
        <Avatar avatar={photos.small} alt="avatar" />
        <h3 className={s.userName}>{name}</h3>
        <p className={s.userStatus}>{status}</p>
      </NavLink>
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
