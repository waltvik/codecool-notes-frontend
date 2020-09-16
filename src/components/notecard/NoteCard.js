import React, { useState } from "react";
import "./notecard.css";
import ReactPlayer from "react-player";

const NoteCard = (props) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("dark"))
  );

  return (
    <div
      className={
        darkMode ? "dark-mode card-wrapper" : "light-mode card-wrapper"
      }
    >
      <div className="card-title">note title</div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        tenetur rerum sapiente ducimus unde cupiditate impedit deserunt fugit
        blanditiis similique praesentium nobis nemo, nostrum animi assumenda
        ipsam pariatur temporibus delectus!
      </div>

      <div className="card-footer">
        <div className="card-footer-bottom">
          <span>user</span> | <span>when</span>
        </div>
        <div className="card-footer-bottom">
          <span className="primary-color">module</span> | <span>week</span>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
