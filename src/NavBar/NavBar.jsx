import React, { useState } from "react";
import "./NavBar.css";
import MenuItem from "./MenuItem";

/*images*/
import cctvIcon from "./img/cctv.svg";
import chipIcon from "./img/chip.svg";
import dnaIcon from "./img/dna.svg";
import formulaIcon from "./img/formula.svg";
import leafIcon from "./img/leaf.svg";
import scienceIcon from "./img/science.svg";



const NavBar = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className={menuActive ? "nav-bar active" : "nav-bar"}>
      <p>Hello</p>
      <ul className="nav-list">
        <MenuItem icon={cctvIcon} caption={'Профиль'} active={menuActive}/>
        <MenuItem icon={formulaIcon} caption={'Обучение'} active={menuActive}/>
        <MenuItem icon={dnaIcon} caption={'База знаний'} active={menuActive}/>
        <MenuItem icon={chipIcon} caption={'Онлайн эмулятор'} active={menuActive}/>
        <MenuItem icon={scienceIcon} caption={'Форум'} active={menuActive}/>
        <MenuItem icon={leafIcon} caption={'О проекте'} active={menuActive}/>
      </ul>
      <div
        className="disclosure-button"
        onClick={() => setMenuActive(!menuActive)}
      >
        <span className="icon-wrapper material-icons">
          {menuActive ? "chevron_left" : "chevron_right"}
        </span>
      </div>
    </div>
  );
};

export default NavBar;
