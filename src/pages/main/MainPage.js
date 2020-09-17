import React, { useEffect, useState } from "react";
import axios from "axios";
import "./main.css";
import NoteCard from "../../components/notecard/NoteCard";
import ModuleBar from "../../components/module/ModuleBar";
import Menu from "../../components/Menu";

const MainPage = () => {
  const [noteState, setNoteState] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:8762/user-service/user/getUser/alma`,

      withCredentials: true,
    }).then(function (response) {
      //handle success
      console.log("itt az almaa " + response.data);
    });

    axios({
      method: "get",
      url: `http://localhost:8762/notes-service/note`,

      withCredentials: true,
    }).then(function (response) {
      //handle success
      setNoteState(response.data);
      console.log("noteees " + response.data[0]);
    });
  }, []);

  const [darkMode] = useState(JSON.parse(localStorage.getItem("dark")));

  return (
    <div className={darkMode ? "dark-mode main-page" : "light-mode main-page"}>
      <div className="main-page-title">Notes</div>
      <Menu />
      <ModuleBar />
      <div className="note-card-wrapper-main">
        {noteState.map((card) => (
          <NoteCard
            key={card.noteId}
            title={card.noteTitle}
            url={card.noteUrl}
            week={card.week}
            time={card.submissionTime}
            module={card.module}
            user={card.username}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
