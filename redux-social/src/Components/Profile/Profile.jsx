import React from "react";
import s from "./Profile.module.css";
import Avatar from './../common/Avatar/Avatar';
import ProfileStatus from "./ProfileStatus";

function Profile(props) {
  const {profile, status} = props;
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
    profile &&
    <div className={s.profile}>
      <div className={s.info}>
        <Avatar className={s.avatar} avatar={profile.photos.large} />
        <div>
          <div className={s.username}>{profile.fullName}</div>
          <ProfileStatus status={status} updateProfilestatus={props.updateProfilestatus} />
          <div className={s.about}>{profile.aboutMe}</div>
        </div>
      </div>
      <div className={s.contacts}>{contactsList}</div>
    </div>
  );
}

export default Profile;
