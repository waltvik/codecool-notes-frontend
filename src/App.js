import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import WelcomePage from "./pages/welcome/WelcomePage";
import RegistrationPage from "./pages/registration/RegistrationPage";
import SettingsPage from "./pages/settings/SettingsPage";
import MainPage from "./pages/main/MainPage";
import ModulePage from "./pages/module/ModulePage";
import UserPage from "./pages/userpage/UserPage";

function App() {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("dark"))
  );

  useEffect(() => {
    setDarkMode(JSON.parse(localStorage.getItem("dark")));
  }, []);

  return (
    <Router>
      <div
        className={darkMode ? "dark-mode" : "light-mode"}
        style={{ height: "100vh" }}
      >
        <Route exact path="/" component={MainPage} />
        <Route exact path="/progbasics" component={ModulePage} />
        <Route exact path="/web" component={ModulePage} />
        <Route exact path="/oop" component={ModulePage} />
        <Route exact path="/advanced" component={ModulePage} />
        <Route exact path="/jobhunt" component={ModulePage} />
        <Route exact path="/welcome" component={WelcomePage} />
        <Route exact path="/registration" component={RegistrationPage} />
        <Route exact path="/settings" component={SettingsPage} />
        <Route exact path="/user-page" component={UserPage} />
      </div>
    </Router>
  );
}

export default App;
