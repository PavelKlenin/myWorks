import React, { useState, useEffect } from "react";
import s from "./Profile.module.css";

const ProfileStatus = (props) => {
  const [status, setStatus] = useState(props.status);
  const [isEdited, setIsEdited] = useState(true);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const editStatus = () => {
    setIsEdited(false);
  };

  const changeStatustext = (e) => {
    setStatus(e.currentTarget.value);
  };

  const updateStatus = () => {
    setIsEdited(true);
    props.updateProfilestatus(status);
  };

  return (
    <div className={s.profileStatus}>
      {isEdited ? (
        <div onDoubleClick={editStatus}>Status: {status || "-"}</div>
      ) : (
        <input
          autoFocus
          onChange={changeStatustext}
          onBlur={updateStatus}
          type="text"
          value={status}
        />
      )}
    </div>
  );
};

export default ProfileStatus;
