import React from "react";
import s from "./Header.module.css";
import Avatar from "../Profile/Avatar/Avatar";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header className={s.header}>
      <div className={s.iconInfo}>
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/those-icons"
          title="Those Icons"
        >
          Those Icons
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          {" "}
          www.flaticon.com
        </a>
      </div>
      <div className={s.loginBlock}>
        {props.profile ? <Avatar avatar={props.profile.photos.small}/> : <NavLink to="/login">Log in</NavLink>}
      </div>
    </header>
  );
}

export default Header;
