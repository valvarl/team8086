import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <p>Hello NavBar</p>
      <div className="disclosure-button">
        <span className="chevron-right material-icons">chevron_right</span>
      </div>
    </div>
  );
};

export default NavBar;
