import React from "react";
import Menu from "../../components/Menu";
import "./settings.css";
import SettingsHeader from "./SettingsHeader";

const SettingsPage = (props) => {
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
      style={{ height: "100%" }}
      className={darkMode ? "dark-mode" : "light-mode"}
    >
      <SettingsHeader urlToAvatar="https://www.pexels.com/hu-hu/foto/allat-aranyos-bajusz-belfoldi-1314550/" />
      <div className="settings-container">
        <div className="toggle-settings-container">
          <span className="light-mode-settings">Light/dark mode</span>
          <span className="toggle-container">
            <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
            <span className="toggle">
              <input
                checked={darkMode}
                onChange={() => setDarkMode((prevMode) => !prevMode)}
                id="checkbox"
                className="checkbox"
                type="checkbox"
              />
              <label htmlFor="checkbox" />
            </span>
            <span style={{ color: darkMode ? "slateblue" : "grey" }}>☾</span>
          </span>
        </div>

        <div className="settings-item">User pic</div>
        <div className="settings-item">User/password change</div>
        <div className="settings-item">Email</div>
      </div>
      <Menu />
    </div>
  );
};

export default SettingsPage;
