import React, { useState } from "react";
import "./menu.css";
import "../App.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {
  PlusOutlined,
  LeftOutlined,
  SearchOutlined,
  HomeOutlined,
  FireOutlined,
} from "@ant-design/icons";
import avatar from "./avatar/avatar.jpg";

const Menu = () => {
  let history = useHistory();

  function goBack() {
    history.goBack();
  }

  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("dark"))
  );

  return (
    <div
      className={
        darkMode
          ? "dark-mode menu-container secondary-background"
          : "light-mode menu-container secondary-background"
      }
    >
      <LeftOutlined
        onClick={goBack}
        className="menu-subitem menu-back menu-goback"
      />

      <Link to="/user-page" className="menu-subitem">
        <img src={avatar} alt="Avatar" className="menu-avatar"></img>
      </Link>
      <Link to="#" className="menu-subitem">
        <PlusOutlined />
      </Link>
      <Link to="/settings" className="menu-subitem">
        <SearchOutlined />
      </Link>
      <Link to="/" className="menu-subitem">
        <HomeOutlined />
      </Link>
    </div>
  );
};

export default Menu;
