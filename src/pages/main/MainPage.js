import React, { useState } from "react";
import "./main.css";
import NoteCard from "../../components/notecard/NoteCard";
import ModuleBar from "../../components/module/ModuleBar";
import Menu from "../../components/Menu";

const MainPage = () => {
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
