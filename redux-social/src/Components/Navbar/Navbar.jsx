import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className={s.navbar}>
      <div className={s.navbarItem}>
        <NavLink activeClassName={s.active} to="/profile">
          Profile
        </NavLink>
      </div>
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
    </nav>
  );
}

export default Navbar;
