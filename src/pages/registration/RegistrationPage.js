import React from "react";
import "./registration.css";

const RegistrationPage = () => {
  const [darkMode, setDarkMode] = React.useState(getInitialMode());
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
      <div className="reg-title">
        <div className="secondary-color">registration</div>
        <div className="primary-color">here</div>
      </div>
      <div className="reg-container">
        <div className="reg-form">
          <input
            className="primary-color"
            type="username"
            id="inputUsername"
            placeholder="USERNAME"
            required
            autoFocus
          />
          <input
            className="primary-color"
            type="password"
            id="inputPassword"
            placeholder="PASSWORD"
            required
            autoFocus
          />
          <input
            className="primary-color"
            type="password"
            id="inputRepeatPassword"
            placeholder="REPEAT PASSWORD"
            required
            autoFocus
          />
          <input
            className="primary-color"
            type="e-mail"
            id="inputEmail"
            placeholder="E-MAIL"
            required
            autoFocus
          />
          <label
            style={{ marginLeft: "20px" }}
            className="secondary-color-light"
          >
            <input
              style={{ marginRight: "20px" }}
              name="isGoing"
              type="checkbox"
            />
            I am a mentor
          </label>

          <button
            className="form-button"
            style={{
              borderStyle: "none",
              margin: "20px",
              padding: "5px",
              borderRadius: "4px",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            log in
          </button>
        </div>

        <div className="secondary-color-light" style={{ textAlign: "center" }}>
          <div>or</div>
          <div>
            sign up <span className="primary-color">here</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
