import React from "react";
import "./modulebar.css";
import { Link } from "react-router-dom";

const ModuleBar = (props) => {
  var str = window.location.href;
  var res = str.replace("http://localhost:3000/", "");

  return (
    <div className="slide-wrapper">
      <div className="content-wrapper slide">
        <div className="menu-item-wrapper">
          <Link
            className={
              res === "progbasics" ? "menu-item primary-color" : "menu-item "
            }
            to="/progbasics"
          >
            progbasics
          </Link>
          <div className="menu-item-background">progbasics</div>
        </div>
        <div className="menu-item-wrapper">
          <Link
            className={`menu-item  ${res === "web" ? "primary-color" : ""}`}
            to="/web"
          >
            web
          </Link>
          <div className="menu-item-background">web</div>
        </div>
        <div className="menu-item-wrapper">
          <Link
            className={`menu-item  ${res === "oop" ? "primary-color" : ""}`}
            to="/oop"
          >
            OOP
          </Link>
          <div className="menu-item-background">OOP</div>
        </div>
        <div className="menu-item-wrapper">
          <Link
            className={`menu-item  ${
              res === "advanced" ? "primary-color" : ""
            }`}
            to="/advanced"
          >
            advanced
          </Link>
          <div className="menu-item-background">advanced</div>
        </div>
        <div className="menu-item-wrapper">
          <Link
            className={`menu-item  ${res === "jobhunt" ? "primary-color" : ""}`}
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
