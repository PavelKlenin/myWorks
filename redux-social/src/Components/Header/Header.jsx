import React, { useState } from "react";
import s from "./Header.module.css";
import Avatar from "./../common/Avatar/Avatar";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import logo from "../../assets/img/logo192.png";

function Header(props) {
  const [hiddenTopMenu, setHiddenTopMenu] = useState(true);

  const toggleShowProfileMenu = () => {
    setHiddenTopMenu(!hiddenTopMenu);
  }
  return (
    <header className={s.header}>
      <img className={s.logo} src={logo} alt="logo" />
      {props.profile && props.isLogged ? (
        <>
          <Navbar />
          <div className={s.loginBlock} onClick={toggleShowProfileMenu}>
            <Avatar
              nameOfClass={s.avatar}
              avatar={props.profile.photos.small}
            />
            <div className={hiddenTopMenu ? `${s.topProfileMenu} ${s.hiddenProfileMenu}` : s.topProfileMenu}>
              <NavLink
                className={s.loginLink}
                to={`/profile/${props.profile.userId}`}
              >
                <Avatar
                  nameOfClass={s.menuAvatar}
                  avatar={props.profile.photos.small}
                />
                <p>
                  {props.profile.fullName}
                  <br />
                  <span className={s.profileExplain}>My&nbsp;profile </span>
                </p>
              </NavLink>
              <hr className={s.divideLine} />
              <button className={s.logoutBtn} onClick={props.logoutProfile}>
                Log Out
              </button>
            </div>
          </div>
        </>
      ) : (
        <NavLink className={s.signinBtn} to="/login">
          Sign In
        </NavLink>
      )}
    </header>
  );
}

export default Header;
