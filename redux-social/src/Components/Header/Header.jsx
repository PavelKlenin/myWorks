import React from "react";
import s from "./Header.module.css";
import Avatar from "../Profile/Avatar/Avatar";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header className={s.header}>
      <div className={s.loginBlock}>
        {props.profile && props.isLogged ? (
          <div>
            <button onClick={props.logoutProfile}>Logout</button>
            <Avatar avatar={props.profile.photos.small} />
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
}

export default Header;
