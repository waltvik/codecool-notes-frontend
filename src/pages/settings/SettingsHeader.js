import React from "react";
import "./settings.css";
import { useHistory } from "react-router-dom";
import { ArrowLeftOutlined, LeftOutlined } from "@ant-design/icons";

const Header = (props) => {
  let history = useHistory();

  function goBack() {
    history.goBack();
  }

  function goHome() {
    history.push("/");
  }

  return (
    <div className="header">
      {/* <ArrowLeftOutlined onClick={goBack} className="header-back" /> */}
      <button onClick={goBack} className="header-arrow-container">
        <LeftOutlined onClick={goBack} className="header-back" />
        <div className="header-arrow-text">back</div>
      </button>
      {/* <div className="header-arrow-container">
        <LeftOutlined onClick={goBack} className="header-back" />
        <div className="header-arrow-text">back</div>
      </div> */}

      <img alt="" src={props.urlToAvatar} className="header-avatar"></img>
    </div>
  );
};

export default Header;
