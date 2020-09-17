import React, { useState } from "react";
import "./menu.css";
import "../App.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import {
  PlusOutlined,
  LeftOutlined,
  SearchOutlined,
  HomeOutlined,
  FireOutlined,
} from "@ant-design/icons";
import avatar from "./avatar/avatar.jpg";

Modal.setAppElement("#root");

const Menu = () => {
  let history = useHistory();

  function goBack() {
    history.goBack();
  }

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
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
      <button onClick={openModal} className="menu-subitem">
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal}>X</button>
          <div>I am a modal</div>
        </Modal>
        <PlusOutlined />
      </button>

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
