import React, { useRef } from "react";
import "./NavBar.css";
import useHover from "./hooks/useHover";

const MenuItem = ({ id, Icon, caption, active, selected, selectMenuItem }) => {
  const ref = useRef();
  const isHovering = useHover(ref);

  return (
    <li
      ref={ref}
      className={isHovering || selected ? "menuitem active" : "menuitem"}
      onClick={() => selectMenuItem(id)}
    >
      <div
        className={
          isHovering || selected
            ? "navigation-icon-wrapper active"
            : "navigation-icon-wrapper"
        }
      >
        <Icon className="navigation-icon" fill={selected ? "black" : "#444"} />
      </div>
      <div
        className="navigation-caption"
        style={{ color: selected ? "black" : "#444" }}
      >
        {active ? <span>{caption}</span> : ""}
      </div>
    </li>
  );
};

export default MenuItem;
