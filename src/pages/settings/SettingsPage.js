import React from "react";
import Menu from "../../components/Menu";
import "./settings.css";

const SettingsPage = (props) => {
  const darkMode = localStorage.getItem("dark");
  const boolValue = darkMode === "true";

  function childFunction(e) {
    e.preventDefault();
    props.functionCallFromParent("Hello From Child1");
  }

  //   function valami() {
  //     props.mode == true ? props.mode == false : props.mode == true;
  //   }

  return (
    <div>
      <div className="settings-container">
        <div className="toggle-settings-container">
          <span className="light-mode-settings">Light/dark mode</span>
          <span className="toggle-container">
            <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
            <span className="toggle">
              <input
                checked={boolValue}
                // onChange={() => valami()}
                onChange={(e) => childFunction(e)}
                //  onChange={() => setDarkMode((prevMode) => !prevMode)}
                id="checkbox"
                className="checkbox"
                type="checkbox"
              />
              <label htmlFor="checkbox" />
            </span>
            <span style={{ color: darkMode ? "slateblue" : "grey" }}>☾</span>
            {/* <button onClick={() => setDarkMode(prevMode => !prevMode)}>
          Toggle
        </button> */}
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
