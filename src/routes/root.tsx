import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
function Root() {
  return (
    <>
      <Navbar />
      <div
        style={{
          paddingTop: "80px",
        }}
      >
        <Outlet />
      </div>
    </>
  );
}

export default Root;
