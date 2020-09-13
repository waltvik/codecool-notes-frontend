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
      <LeftOutlined
        onClick={goBack}
        className="menu-subitem menu-back menu-goback"
      />

      <Link to="#" className="menu-subitem">
        <FireOutlined twoToneColor="#eb2f96" />
      </Link>
      <Link to="#" className="menu-subitem">
        <PlusOutlined />
      </Link>
      <Link to="#" className="menu-subitem">
        <SearchOutlined />
      </Link>
      <Link to="#" className="menu-subitem">
        <HomeOutlined />
      </Link>
    </div>
  );
};

export default Menu;
