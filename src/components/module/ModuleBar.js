import React, { useState } from "react";
import "./modulebar.css";
import { Link } from "react-router-dom";

const ModuleBar = (props) => {
  var str = window.location.href;
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("dark"))
  );
  return (
    <div
      className={
        darkMode ? "dark-mode slide-wrapper" : "light-mode slide-wrapper"
      }
    >
      <div className="content-wrapper slide">
        <div className="menu-item-wrapper">
          <Link
            className={
              str.includes("progbasics") ? "menu-item-active" : "menu-item "
            }
            to="/progbasics"
          >
            progbasics
          </Link>
          <div className="menu-item-background">progbasics</div>
        </div>
        <div className="menu-item-wrapper">
          <Link
            className={str.includes("web") ? "menu-item-active" : "menu-item "}
            to="/web"
          >
            web
          </Link>
          <div className="menu-item-background">web</div>
        </div>
        <div className="menu-item-wrapper">
          <Link
            className={str.includes("oop") ? "menu-item-active" : "menu-item "}
            to="/oop"
          >
            OOP
          </Link>
          <div className="menu-item-background">OOP</div>
        </div>
        <div className="menu-item-wrapper">
          <Link
            className={
              str.includes("advanced") ? "menu-item-active" : "menu-item "
            }
            to="/advanced"
          >
            advanced
          </Link>
          <div className="menu-item-background">advanced</div>
        </div>
        <div className="menu-item-wrapper">
          <Link
            className={
              str.includes("jobhunt") ? "menu-item-active" : "menu-item "
            }
            to="/jobhunt"
          >
            jobhunt
          </Link>
          <div className="menu-item-background">jobhunt</div>
        </div>
      </div>
    </div>
  );
};

export default ModuleBar;
