import React from "react";
import Menu from "../../components/Menu";
import "./settings.css";
import SettingsHeader from "./SettingsHeader";

const SettingsPage = (props) => {
  const darkMode = localStorage.getItem("dark");
  const boolValue = darkMode === "true";

  //   function handleChange(event) {
  //     // Here, we invoke the callback with the new value
  //     if (props.value == true) {
  //       props.onChange(false);
  //     } else {
  //       props.onChange(true);
  //     }
  //     // props.onChange(event.target.value);
  //   }

  //   function valami() {
  //     props.mode == true ? props.mode == false : props.mode == true;
  //   }

  return (
    <div>
      <SettingsHeader urlToAvatar="https://www.pexels.com/hu-hu/foto/allat-aranyos-bajusz-belfoldi-1314550/" />
      <div className="settings-container">
        <div className="toggle-settings-container">
          <span className="light-mode-settings">Light/dark mode</span>
          <span className="toggle-container">
            <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
            <span className="toggle">
              <input
                defaultChecked={darkMode}
                // onChange={() => valami()}
                // onChange={handleChange}
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
