import React from "react";
import "./main.css";
import NoteCard from "../../components/notecard/NoteCard";
import ModuleBar from "../../components/module/ModuleBar";

const ModulePage = () => {
  return (
    <div style={{ width: "100%", height: "100%" }} className="module-page">
      <ModuleBar />
      <div className="note-card-wrapper">
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

export default ModulePage;
