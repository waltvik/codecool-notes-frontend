import React, { useState, useEffect } from "react";
import "./userpage.css";
import NoteCard from "../../components/notecard/NoteCard";
import Menu from "../../components/Menu";
import { Link } from "react-router-dom";

import { SettingOutlined, SearchOutlined } from "@ant-design/icons";
import Avatar from "../../components/avatar/Avatar";

const UserPage = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("dark"))
  );

  useEffect(() => {
    setDarkMode(JSON.parse(localStorage.getItem("dark")));
  }, []);

  return (
    <div className={darkMode ? "dark-mode user-page" : "light-mode user-page"}>
      <div className="user-page-header">
        <Avatar />

        <Link to="/settings">
          <SettingOutlined className="user-page-setting" />
        </Link>
      </div>
      <div className="search-wrapper">
        <input className="searchbar"></input>
        <SearchOutlined className="search-icon" />
      </div>
      <div className="user-page-sub-title">My notes:</div>
      <div className="note-card-wrapper-user">
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
      <Menu />
    </div>
  );
};

export default UserPage;
