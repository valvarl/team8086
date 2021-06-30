import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className={menuActive ? "nav-bar active" : "nav-bar"}>
      <p>Hello NavBar</p>
      <div
        className="disclosure-button"
        onClick={() => setMenuActive(!menuActive)}
      >
        <span className="icon-wrapper material-icons">{menuActive ? "chevron_left" : "chevron_right"}</span>
      </div>
    </div>
  );
};

export default NavBar;
