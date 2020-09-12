import React from "react";
import "./modulebar.css";
import { Link } from "react-router-dom";

const ModuleBar = (props) => {
  var str = window.location.href;

  return (
    <div className="slide-wrapper">
      <div className="content-wrapper slide">
        <div className="menu-item-wrapper">
          <Link
            className={
              str.includes("progbasics")
                ? "menu-item primary-color"
                : "menu-item "
            }
            to="/progbasics"
          >
            progbasics
          </Link>
          <div className="menu-item-background">progbasics</div>
        </div>
        <div className="menu-item-wrapper">
          <Link
            className={`menu-item  ${
              str.includes("web") ? "primary-color" : ""
            }`}
            to="/web"
          >
            web
          </Link>
          <div className="menu-item-background">web</div>
        </div>
        <div className="menu-item-wrapper">
          <Link
            className={`menu-item  ${
              str.includes("oop") ? "primary-color" : ""
            }`}
            to="/oop"
          >
            OOP
          </Link>
          <div className="menu-item-background">OOP</div>
        </div>
        <div className="menu-item-wrapper">
          <Link
            className={`menu-item  ${
              str.includes("advanced") ? "primary-color" : ""
            }`}
            to="/advanced"
          >
            advanced
          </Link>
          <div className="menu-item-background">advanced</div>
        </div>
        <div className="menu-item-wrapper">
          <Link
            className={`menu-item  ${
              str.includes("jobhunt") ? "primary-color" : ""
            }`}
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
