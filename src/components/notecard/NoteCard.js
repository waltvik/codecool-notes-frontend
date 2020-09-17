import React, { useState } from "react";
import "./notecard.css";

const NoteCard = (props) => {
  const [darkMode] = useState(JSON.parse(localStorage.getItem("dark")));

  return (
    <div
      className={
        darkMode ? "dark-mode card-wrapper" : "light-mode card-wrapper"
      }
    >
      <div className="card-title">{props.title}</div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        tenetur rerum sapiente ducimus unde cupiditate impedit deserunt fugit
        blanditiis similique praesentium nobis nemo, nostrum animi assumenda
        ipsam pariatur temporibus delectus!
      </div>

      <div className="card-footer">
        <div className="card-footer-bottom">
          <span>{props.user}</span> | <span>{props.time}</span>
        </div>
        <div className="card-footer-bottom">
          <span className="primary-color">{props.module}</span> |{" "}
          <span>{props.week}</span>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
