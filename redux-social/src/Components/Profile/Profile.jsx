import React from "react";
import s from "./Profile.module.css";
import Avatar from "./Avatar/Avatar";

function Profile(props) {
  let contacts = [];
  for (let contact in props.contacts) {
    const value = props.contacts[contact];
    if (value) {
      contacts = [...contacts, [contact, value]];
    }
  }

  const contactsList = contacts.map((contact, index) => {
    return (
      <div className="contact" key={index}>
        {contact[0]} : {contact[1]}
      </div>
    );
  });

  return (
    <div className={s.profile}>
      <div className={s.info}>
        <Avatar className={s.avatar} avatar={props.photos.large} />
        <div>
          <div className={s.username}>{props.fullName}</div>
          <div className={s.about}>{props.aboutMe}</div>
        </div>
      </div>
      <div className={s.contacts}>{contactsList}</div>
    </div>
  );
}

export default Profile;
