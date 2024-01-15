import React, { useState } from "react";
import styles from "./navbar.module.scss";
import Logo from "../../assets/Rick-and-Morty-Logo.png";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={`${styles.navBar} ${openMenu ? styles.navBarMobile : ""}`}>
      <div className={styles.navbarInner}>
        <div className={styles.logo} onClick={() => navigate("/")}>
          <img src={Logo} alt="logo" />
        </div>
        <div className={styles.navLinks}>
          <NavLink
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "yellow" : "",
                textDecoration: isActive ? "underline" : "",
              };
            }}
            to="characters"
            onClick={() => setOpenMenu(false)}
            className={styles.navLink}
          >
            Characters
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "yellow" : "",
                textDecoration: isActive ? "underline" : "",
              };
            }}
            to="locations"
            onClick={() => setOpenMenu(false)}
            className={styles.navLink}
          >
            Locations
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "yellow" : "",
                textDecoration: isActive ? "underline" : "",
              };
            }}
            to="episodes"
            onClick={() => setOpenMenu(false)}
            className={styles.navLink}
          >
            Episodes
          </NavLink>
        </div>
        <div
          className={styles.hamburgerIcon}
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? (
            <span className="material-symbols-outlined">menu_open</span>
          ) : (
            <span className="material-symbols-outlined">menu</span>
          )}
        </div>
      </div>
      {openMenu && (
        <div className={styles.mobileMenu}>
          <NavLink
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "yellow" : "",
                textDecoration: isActive ? "underline" : "",
              };
            }}
            to="characters"
            onClick={() => setOpenMenu(false)}
            className={styles.navLink}
          >
            Characters
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "yellow" : "",
                textDecoration: isActive ? "underline" : "",
              };
            }}
            to="locations"
            onClick={() => setOpenMenu(false)}
            className={styles.navLink}
          >
            Locations
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "yellow" : "",
                textDecoration: isActive ? "underline" : "",
              };
            }}
            to="episodes"
            onClick={() => setOpenMenu(false)}
            className={styles.navLink}
          >
            Episodes
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Navbar;
