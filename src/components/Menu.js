import React from "react";
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

const Menu = () => {
  let history = useHistory();

  function goBack() {
    history.goBack();
  }

  return (
    <div className="menu-container secondary-background">
      {/* <button onClick={goBack} className="menu-item menu-goback"> */}
      <LeftOutlined
        onClick={goBack}
        className="menu-item menu-back menu-goback"
      />
      {/* </button> */}
      <Link to="#" className="menu-item">
        <FireOutlined twoToneColor="#eb2f96" />
      </Link>
      <Link to="#" className="menu-item">
        <PlusOutlined />
      </Link>
      <Link to="#" className="menu-item">
        <SearchOutlined />
      </Link>
      <Link to="#" className="menu-item">
        <HomeOutlined />
      </Link>
      {/* <div className="menu-item">T</div>
      <div className="menu-item">+</div>
      <div className="menu-item">S</div>
      <div className="menu-item">H</div> */}
    </div>
  );
};

export default Menu;
