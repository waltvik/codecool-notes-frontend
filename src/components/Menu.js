import React, { useState, useEffect } from "react";
import "./menu.css";
import "../App.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import Dropdown from "react-bootstrap/Dropdown";
import {
  PlusOutlined,
  LeftOutlined,
  SearchOutlined,
  HomeOutlined,
  FireOutlined,
  RightOutlined,
} from "@ant-design/icons";
import avatar from "./avatar/avatar.jpg";

Modal.setAppElement("#root");

const data = [
  { id: 0, label: "PROGBASICS" },
  { id: 1, label: "WEB" },
  { id: 2, label: "OOP" },
  { id: 3, label: "ADVANCED" },
  { id: 4, label: "JOBHUNT" },
];

const Menu = () => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  };

  const [image, setImage] = useState("");
  const [text, setText] = useState("");
  const [link, setLink] = useState("");

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

  function closeModal(e) {
    e.stopPropagation();
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
      <button onClick={openModal} className="menu-subitem menu-subbutton">
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className="modal-container"
        >
          <button onClick={(e) => closeModal(e)}>X</button>
          <div>Helo</div>
          <div className="modal-content-container">
            <input
              className="modal-item"
              type="text"
              id="modal-image"
              placeholder="UPLOAD IMAGE URL"
              autoFocus
              onChange={(event) => setImage(event.target.value)}
            />
            <input
              className="modal-item"
              type="text"
              id="modal-text"
              placeholder="WRITE SOMETHING..."
              required
              autoFocus
              onChange={(event) => setText(event.target.value)}
            />
            <input
              className="modal-item"
              type="text"
              id="modal-link"
              placeholder="HANDY LINK"
              autoFocus
              onChange={(event) => setLink(event.target.value)}
            />
          </div>
          <div className="dropdown-container">
            <div className="dropdown">
              <div className="dropdown-header" onClick={toggleDropdown}>
                {selectedItem
                  ? items.find((item) => item.id == selectedItem).label
                  : "Select your module"}
                <RightOutlined className={`icon ${isOpen && "open"}`} />

                {/* <i
                  className={`fa fa-chevron-right icon ${isOpen && "open"}`}
                ></i> */}
              </div>
              <div className={`dropdown-body ${isOpen && "open"}`}>
                {items.map((item) => (
                  <div
                    className="dropdown-item"
                    onClick={(e) => handleItemClick(e.target.id)}
                    id={item.id}
                    key={item.id}
                  >
                    <span
                      className={`dropdown-item-dot ${
                        item.id == selectedItem && "selected"
                      }`}
                    >
                      •{" "}
                    </span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
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
