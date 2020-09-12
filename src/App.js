import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import WelcomePage from "./pages/welcome/WelcomePage";
import RegistrationPage from "./pages/registration/RegistrationPage";
import MainPage from "./pages/main/MainPage";

function App() {
  const [darkMode, setDarkMode] = React.useState(getInitialMode());
  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorScheme();
    // if mode was saved --> dark / light
    if (isReturningUser) {
      return savedMode;
      // if preferred color scheme is dark --> dark
    } else if (userPrefersDark) {
      return true;
      // otherwise --> light
    } else {
      return false;
    }
    // return savedMode || false;
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return;
  }

  return (
    <Router>
      <div
        className={darkMode ? "dark-mode" : "light-mode"}
        style={{ height: "100vh" }}
      >
        <Route exact path="/" component={MainPage} />
        <Route exact path="/progbasics" component={MainPage} />
        <Route exact path="/web" component={MainPage} />
        <Route exact path="/oop" component={MainPage} />
        <Route exact path="/advanced" component={MainPage} />
        <Route exact path="/jobhunt" component={MainPage} />
        <Route exact path="/welcome" component={WelcomePage} />
        <Route exact path="/registration" component={RegistrationPage} />
      </div>
    </Router>
  );
}

export default App;
