import React from "react";
import Menu from "../../components/Menu";

const SettingsPage = () => {
  return (
    <div>
      <div className="settings-container">
        <div>Light/dark mode</div>
        <div>User pic</div>
        <div>User/password change</div>
        <div>Email</div>
      </div>
      <Menu />
    </div>
  );
};

export default SettingsPage;
