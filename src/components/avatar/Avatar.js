import React from "react";
import "./avatar.css";
import { Link } from "react-router-dom";
import avatar from "./avatar.jpg";

const Avatar = () => {
  return (
    <div>
      <Link to="/user-page">
        <img src={avatar} alt="Avatar" className="avatar"></img>
      </Link>
    </div>
  );
};

export default Avatar;
