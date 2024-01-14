import React, { useState } from "react";
import styles from "./navbar.module.scss";
import Logo from "../../assets/Rick-and-Morty-Logo.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  const navigateTo = (link: string) => {
    navigate(link);
    setOpenMenu(false);
  };

  return (
    <div className={`${styles.navBar} ${openMenu ? styles.navBarMobile : ""}`}>
      <div className={styles.navbarInner}>
        <div className={styles.logo} onClick={() => navigate("/")}>
          <img src={Logo} alt="logo" />
        </div>
        <div className={styles.navLinks}>
          <div
            onClick={() => navigateTo("characters")}
            className={styles.navLink}
          >
            Characters
          </div>
          <div
            onClick={() => navigateTo("locations")}
            className={styles.navLink}
          >
            Locations
          </div>
          <div
            onClick={() => navigateTo("episodes")}
            className={styles.navLink}
          >
            Episodes
          </div>
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
          <div
            onClick={() => navigateTo("characters")}
            className={styles.navLink}
          >
            Characters
          </div>
          <div
            onClick={() => navigateTo("locations")}
            className={styles.navLink}
          >
            Locations
          </div>
          <div
            onClick={() => navigateTo("episodes")}
            className={styles.navLink}
          >
            Episodes
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
