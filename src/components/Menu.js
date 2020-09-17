import React from "react";
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

  return (
    <div className="menu-container secondary-background">
      <LeftOutlined
        onClick={goBack}
        className="menu-subitem menu-back menu-goback"
      />

      <Link to="#" className="menu-subitem">
        <FireOutlined twoToneColor="#eb2f96" />
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
