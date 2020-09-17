import React, { useEffect, useState } from "react";
import "./welcome.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const WelcomePage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  useEffect(() => {}, []);

  const onLogin = () => {
    axios({
      method: "post",
      url: `http://localhost:8762/auth/login`,
      data: {
        username: username,
        password: password,
      },
      withCredentials: true,
    })
      .then(function (response) {
        if (response.data.userid > 0) {
          history.push("/");
        }

        //handle success
        console.log("ezazzzz");
        console.log(response.data);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  const [darkMode] = React.useState(getInitialMode());
  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorScheme();

    if (isReturningUser) {
      return savedMode;
    } else if (userPrefersDark) {
      return true;
    } else {
      return false;
    }
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return;
  }

  return (
    <div
      style={{ width: "100%", height: "100%" }}
      className={
        darkMode ? "dark-mode welcome-page" : "light-mode welcome-page"
      }
    >
      <div className="welcome-title-container">
        <div className="welcome-title">
          <div className="secondary-color">welcome</div>
          <div className="primary-color">here</div>
        </div>
        <div className="welcome-sub-title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus hic
          laboriosam voluptates molestiae quasi ut voluptatum numquam, optio nam
          consectetur sed consequuntur expedita, explicabo est corrupti? Maxime
          aperiam totam corporis?
        </div>
      </div>
      <div className="welcome-login-container">
        <div className="welcome-login-form">
          <input
            className="primary-color"
            type="username"
            id="inputUsername"
            placeholder="USERNAME"
            required
            autoFocus
            onChange={(event) => setUserName(event.target.value)}
          />
          <input
            className="primary-color"
            type="password"
            id="inputPassword"
            placeholder="PASSWORD"
            required
            autoFocus
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="form-button" onClick={() => onLogin()}>
            log in
          </button>
        </div>

        <div className="secondary-color-light welcome-signup">
          <div>or</div>
          <div>
            sign up <span className="primary-color">here</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
