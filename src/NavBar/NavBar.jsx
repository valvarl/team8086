import React, { useState } from "react";
import "./NavBar.css";
import MenuItem from "./MenuItem";

/*images*/
import { ReactComponent as cctvIcon } from "./img/cctv.svg";
import { ReactComponent as chipIcon } from "./img/chip.svg";
import { ReactComponent as dnaIcon } from "./img/dna.svg";
import { ReactComponent as formulaIcon } from "./img/formula.svg";
import { ReactComponent as leafIcon } from "./img/leaf.svg";
import { ReactComponent as scienceIcon } from "./img/science.svg";

const NavBar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [items, setItems] = useState([
    { id: 1, icon: cctvIcon, caption: "Профиль", selected: false },
    { id: 2, icon: formulaIcon, caption: "Обучение", selected: false },
    { id: 3, icon: dnaIcon, caption: "База знаний", selected: false },
    { id: 4, icon: chipIcon, caption: "Онлайн эмулятор", selected: false },
    { id: 5, icon: scienceIcon, caption: "Форум", selected: false },
    { id: 6, icon: leafIcon, caption: "О проекте", selected: false },
  ]);

  function selectMenuItem(id) {
    setItems(
      items.map((item) => {
        item.selected = item.id === id;
        return item;
      })
    );
  }

  return (
    <div className={menuActive ? "nav-bar active" : "nav-bar"}>
      <p>Hello</p>
      <ul className="nav-list">
        {items.map((mi) => {
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
        })}
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
