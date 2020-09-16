import React from "react";
import "./modulepage.css";
import NoteCard from "../../components/notecard/NoteCard";
import ModuleBar from "../../components/module/ModuleBar";
import Menu from "../../components/Menu";

const ModulePage = () => {
  // TODO: get module notes from back-end

  // TODO: get filtered notes from back-end

  var str = window.location.href;
  var module = str.substring(str.indexOf("3000/") + 5);

  return (
    <div style={{ width: "100%", height: "100%" }} className="module-page">
      <Menu />
      <ModuleBar />
      <div className="module-filters">
        <div className="module-page-title-wrapper">
          <div className="module-page-title">{module}</div>
        </div>
        <div className="module-filter">weeks</div>
        <div className="module-filter">technologies</div>
      </div>
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
