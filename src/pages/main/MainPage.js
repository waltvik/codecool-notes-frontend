import React from "react";
import { Link } from "react-router-dom";
import "./main.css";
import NoteCard from "../../components/notecard/NoteCard";

const MainPage = ({ setter }) => {
  return (
    <div style={{ width: "100%", height: "100%" }} className="main-page">
      <div className="slide-wrapper">
        <div className="content-wrapper slide">
          <div className="menu-item-wrapper">
            <Link className="menu-item" to="/">
              progbasics
            </Link>
            <div className="menu-item-background">progbasics</div>
          </div>
          <div className="menu-item-wrapper">
            <Link className="menu-item" to="/">
              web
            </Link>
            <div className="menu-item-background">web</div>
          </div>
          <div className="menu-item-wrapper">
            <Link className="menu-item" to="/">
              OOP
            </Link>
            <div className="menu-item-background">OOP</div>
          </div>
          <div className="menu-item-wrapper">
            <Link className="menu-item" to="/">
              advanced
            </Link>
            <div className="menu-item-background">advanced</div>
          </div>
          <div className="menu-item-wrapper">
            <Link className="menu-item" to="/">
              jobhunt
            </Link>
            <div className="menu-item-background">jobhunt</div>
          </div>
        </div>
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

export default MainPage;
