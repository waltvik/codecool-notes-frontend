import React, { useState, useEffect } from "react";
import "./modulepage.css";
import NoteCard from "../../components/notecard/NoteCard";
import ModuleBar from "../../components/module/ModuleBar";
import Menu from "../../components/Menu";
import axios from "axios";

const ModulePage = () => {
  // TODO: get module notes from back-end

  // TODO: get filtered notes from back-end

  const [modulState, setModulState] = useState([]);

  var str = window.location.href;

  var lastslashindex = str.lastIndexOf("/");
  var module = str.substring(lastslashindex + 1);

  const [darkMode] = useState(JSON.parse(localStorage.getItem("dark")));

  useEffect(() => {
    axios({
      method: "get",
      url:
        `http://localhost:8762/notes-service/note/module/` +
        module.toUpperCase(),

      withCredentials: true,
    }).then(function (response) {
      //handle success
      setModulState(response.data);
      console.log("noteees " + response.data[0]);
    });
  }, [module]);

  return (
    <div
      style={{ width: "100%", height: "100%" }}
      className={darkMode ? "dark-mode module-page" : "light-mode module-page"}
    >
      <Menu />
      <ModuleBar />
      <div className="module-filters">
        <div className="module-page-title-wrapper">
          <div className="module-page-title">{module}</div>
        </div>
        <div className="module-filter">weeks</div>
        <div style={{ textAlign: "right" }} className="module-filter">
          technologies
        </div>
      </div>
      <div className="note-card-wrapper">
        {modulState.map((card) => (
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

export default ModulePage;
