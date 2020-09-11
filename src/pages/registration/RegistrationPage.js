import React from "react";

const RegistrationPage = () => {
  return (
    <div style={{ width: "100%", height: "100%" }} className="welcome-page">
      <div>
        <div
          style={{
            fontSize: "45px",
            fontWeight: "bold",
            textAlign: "right",
            paddingRight: "5px",
            textTransform: "uppercase",
            paddingTop: "3em",
          }}
        >
          <div className="secondary-color">registration</div>
          <div className="primary-color">here</div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateRows: "1fr 1fr",
            marginTop: "20%",
            marginBottom: "1em",
          }}
        >
          <input
            className="primary-color"
            style={{
              borderStyle: "none",
              paddingLeft: "20px",
              paddingBottom: "4px",
              backgroundColor: "transparent",
              marginBottom: "30px",
              borderBottom: "solid 1px #A6A4A6",
              marginLeft: "20px",
              marginRight: "20px",
            }}
            type="username"
            id="inputUsername"
            placeholder="USERNAME"
            required
            autoFocus
          />
          <input
            className="primary-color"
            style={{
              borderStyle: "none",
              paddingLeft: "20px",
              paddingBottom: "4px",
              backgroundColor: "transparent",
              marginBottom: "30px",
              borderBottom: "solid 1px #A6A4A6",
              marginLeft: "20px",
              marginRight: "20px",
            }}
            type="password"
            id="inputPassword"
            placeholder="PASSWORD"
            required
            autoFocus
          />
          <input
            className="primary-color"
            style={{
              borderStyle: "none",
              paddingLeft: "20px",
              paddingBottom: "4px",
              backgroundColor: "transparent",
              marginBottom: "30px",
              borderBottom: "solid 1px #A6A4A6",
              marginLeft: "20px",
              marginRight: "20px",
            }}
            type="password"
            id="inputRepeatPassword"
            placeholder="REPEAT PASSWORD"
            required
            autoFocus
          />
          <input
            className="primary-color"
            style={{
              borderStyle: "none",
              paddingLeft: "20px",
              paddingBottom: "4px",
              backgroundColor: "transparent",
              marginBottom: "30px",
              borderBottom: "solid 1px #A6A4A6",
              marginLeft: "20px",
              marginRight: "20px",
            }}
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
