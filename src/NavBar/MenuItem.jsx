import React, {useRef} from "react";
import "./NavBar.css";
import useHover from "./hooks/useHover";

const MenuItem = (props) => {
    const ref =useRef();
    const isHovering = useHover(ref);

  return (
    <li ref={ref} className={isHovering ? 'menuitem active' : 'menuitem'}>
      <div className={isHovering ? "navigation-icon-wrapper active" : 'navigation-icon-wrapper'}>
        <img className="navigation-icon" src={props.icon} alt="React Logo" />
      </div>
        <div className='navigation-caption'>
            {props.active ? <span>{props.caption}</span> : ''}
        </div>
    </li>
  );
};

export default MenuItem;
