import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className={s.navbar}>
      <div className={s.navbarItem}>
        <NavLink activeClassName={s.active} to="/dialogs">
          Dialogs
        </NavLink>
      </div>
      <div className={s.navbarItem}>
        <NavLink activeClassName={s.active} to="/news">
          News
        </NavLink>
      </div>
      <div className={s.navbarItem}>
        <NavLink activeClassName={s.active} to="/contacts">
          Contacts
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
