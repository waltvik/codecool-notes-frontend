import React, { useEffect, useState } from "react";
import axios from "axios";
import "./main.css";
import NoteCard from "../../components/notecard/NoteCard";
import ModuleBar from "../../components/module/ModuleBar";
import Menu from "../../components/Menu";

const MainPage = () => {
  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:8762/user-service/user/getUser/alma`,

      withCredentials: true,
    }).then(function (response) {
      //handle success
      console.log("itt a kibaszott almaa " + response.data);
    });
  }, []);

  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("dark"))
  );

  return (
    <div className={darkMode ? "dark-mode main-page" : "light-mode main-page"}>
      <div className="main-page-title">Notes</div>
      <Menu />
      <ModuleBar />
      <div className="note-card-wrapper-main">
        <NoteCard></NoteCard>
        <NoteCard></NoteCard>
        <NoteCard></NoteCard>
        <NoteCard></NoteCard>
        <NoteCard></NoteCard>
        <NoteCard></NoteCard>
        <NoteCard></NoteCard>
        <NoteCard></NoteCard>
        <NoteCard></NoteCard>
        <NoteCard></NoteCard>
        <NoteCard></NoteCard>
      </div>
    </div>
  );
};

export default MainPage;
