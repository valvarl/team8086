import React, { useState } from "react";
import "./NavBar.css";
import MenuItem from "./MenuItem";

/*images*/
import logo from "./img/logo.svg";
import { ReactComponent as factoryIcon } from "./img/factory.svg";
import { ReactComponent as cctvIcon } from "./img/cctv.svg";
import { ReactComponent as chipIcon } from "./img/chip.svg";
import { ReactComponent as dnaIcon } from "./img/dna.svg";
import { ReactComponent as formulaIcon } from "./img/formula.svg";
import { ReactComponent as leafIcon } from "./img/leaf.svg";
import { ReactComponent as scienceIcon } from "./img/science.svg";
import { ReactComponent as disconnectIcon } from "./img/disconnect.svg";

const NavBar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [items, setItems] = useState([
    { id: 0, icon: factoryIcon, caption: "Главная", selected: true },
    { id: 1, icon: cctvIcon, caption: "Профиль", selected: false },
    { id: 2, icon: formulaIcon, caption: "Обучение", selected: false },
    { id: 3, icon: dnaIcon, caption: "База знаний", selected: false },
    { id: 4, icon: chipIcon, caption: "Онлайн эмулятор", selected: false },
    { id: 5, icon: scienceIcon, caption: "Форум", selected: false },
    { id: 6, icon: leafIcon, caption: "О проекте", selected: false },
    { id: 7, icon: disconnectIcon, caption: "Выйти", selected: false },
  ]);

  function selectMenuItem(id) {
    setItems(
      items.map((item) => {
        item.selected = item.id === id;
        return item;
      })
    );
  }

  const menuItems = items.map((mi) => {
    return (
      <MenuItem
        id={mi.id}
        Icon={mi.icon}
        caption={mi.caption}
        active={menuActive}
        selected={mi.selected}
        key={mi.id}
        selectMenuItem={selectMenuItem}
      />
    );
  });

  return (
    <div className={menuActive ? "nav-bar active" : "nav-bar"}>
      <div className="nav-scroller">
        <div className="header">
          {menuActive ? (
            <span className="logo-title">Team 8086</span>
          ) : (
            <img className="logo" src={logo} alt="React logo" />
          )}
        </div>

        <ul className="nav-list">
          {menuItems.slice(0, 1)}
          <div className="divider" />
          {menuItems.slice(1, 6)}
          <div className="divider" />
          {menuItems.slice(6)}
        </ul>
      </div>
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
