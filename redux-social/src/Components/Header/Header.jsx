import React from "react";
import s from "./Header.module.css";
import Avatar from "./../common/Avatar/Avatar";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Header(props) {
  return (
    <header className={s.header}>
      <Navbar />
        {props.profile && props.isLogged ? (
         <div className={s.loginBlock}>
            <button onClick={props.logoutProfile}>Logout</button>
            <NavLink to={`/profile/${props.profile.userId}`}>
              <Avatar avatar={props.profile.photos.small} />
            </NavLink>
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
    </header>
  );
}

export default Header;
