import React, { useState, Fragment } from "react";
import "./Login.sass";
import logo from "../../assets/logo.svg";
import * as Mat from "@material-ui/core";
function Login() {
  const [currentPageLogin, setcurrentPageLogin] = useState(true);
  function loginRegisterToggle(event: any) {
    setcurrentPageLogin(() => {
      if (currentPageLogin) {
        return false;
      } else {
        return true;
      }
    });
  }
  return (
    <div className="login">
      <div
        className={`login__content ${currentPageLogin ? "log-in" : "sign-up"}`}
      >
        <div className="title">
          <img src={logo} height="40px" className="App-logo" alt="logo" />
        </div>
        <div className="auth-type">
          {currentPageLogin ? "Login" : "Register"}
        </div>
        <div className="social-signin"></div>

        <form className="form">
          <div className="form__inputs">
            <Mat.TextField
              className="textField"
              variant="outlined"
              label="First Name"
            ></Mat.TextField>
            <Mat.TextField
              className="textField"
              variant="outlined"
              label="Last Name"
            ></Mat.TextField>
            {!currentPageLogin && (
              <Fragment>
                <Mat.TextField
                  className="textField"
                  variant="outlined"
                  label="Email"
                ></Mat.TextField>
                <Mat.TextField
                  className="textField"
                  variant="outlined"
                  label="Password"
                ></Mat.TextField>
              </Fragment>
            )}
          </div>
          <div className="form__buttons">
            <Mat.Button variant="contained" color="primary">
              {currentPageLogin ? "Login" : "Register"}
            </Mat.Button>
            <Mat.Button
              variant="outlined"
              color="secondary"
              onClick={loginRegisterToggle}
            >
              {currentPageLogin ? "Register >" : "Login <"}
            </Mat.Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
