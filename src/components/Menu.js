import React from "react";
import "./menu.css";
import "../App.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu-container secondary-background">
      <Link to="#" className="menu-item">
        T
      </Link>
      <Link to="#" className="menu-item">
        +
      </Link>
      <Link to="#" className="menu-item">
        S
      </Link>
      <Link to="#" className="menu-item">
        H
      </Link>
      {/* <div className="menu-item">T</div>
      <div className="menu-item">+</div>
      <div className="menu-item">S</div>
      <div className="menu-item">H</div> */}
    </div>
  );
};

export default Menu;
