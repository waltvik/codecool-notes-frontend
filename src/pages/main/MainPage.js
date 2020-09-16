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

  return (
    <div style={{ width: "100%", height: "100%" }} className="main-page">
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
