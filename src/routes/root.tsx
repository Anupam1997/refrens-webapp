import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import styles from "../styles/root.module.scss";
function Root() {
  return (
    <div className={styles.root}>
      <Navbar />
      <div
        style={{
          paddingTop: "80px",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
