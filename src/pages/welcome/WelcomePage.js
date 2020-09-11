import React from "react";
import "./welcome.css";

const WelcomePage = () => {
  return (
    <div style={{ width: "100%", height: "100%" }} className="welcome-page">
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
          />
          <input
            className="primary-color"
            type="password"
            id="inputPassword"
            placeholder="PASSWORD"
            required
            autoFocus
          />
          <button>log in</button>
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
