import React from "react";
import styles from "./navbar.module.scss";
import Logo from "../../assets/Rick-and-Morty-Logo.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className={styles.navBar}>
      <div className={styles.logo} onClick={() => navigate("/")}>
        <img src={Logo} alt="logo" />
      </div>
      <div className={styles.navLinks}>
        <div onClick={() => navigate("characters")} className={styles.navLink}>
          Characters
        </div>
        <div onClick={() => navigate("locations")} className={styles.navLink}>
          Locations
        </div>
        <div onClick={() => navigate("episodes")} className={styles.navLink}>
          Episodes
        </div>
      </div>
    </div>
  );
}

export default Navbar;
