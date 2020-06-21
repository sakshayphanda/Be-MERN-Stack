import React, { useState, Fragment } from "react";
import "./Login.sass";
import logo from "../../assets/logo.svg";
import * as Mat from "@material-ui/core";
import Axios from "axios";
import { BASE_URL } from "../../models/constants";
import { AuthRoutes } from "../../models/enums/routes.enum";

function Login() {
  const [currentPageLogin, setcurrentPageLogin] = useState(true);
  const [email, setemail] = useState<string>('');
  const [password, setpassword] = useState<string>('');
  const [message, setmessage] = useState<string>('')
  const loginClicked = () => {
    Axios.post(BASE_URL + AuthRoutes.LOG_IN, {
      email: email,
      password: password,
    }).then(
      response => {
        setmessage('log in success');
      }
    );
  };
  function loginRegisterToggle(event: any) {
    setemail('');
    setpassword('');
    setmessage('');
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
            {!currentPageLogin && (
              <Fragment>
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
              </Fragment>
            )}
            <Mat.TextField
              className="textField"
              variant="outlined"
              label="Email"
              value={email}
              onChange={(ev)=> setemail(ev.target.value)}
            ></Mat.TextField>
            <Mat.TextField
            type="password"
              className="textField"
              variant="outlined"
              label="Password"
              value={password}
              onChange={(ev)=> setpassword(ev.target.value)}
            ></Mat.TextField>
          </div>
          {message && <div className="message">
          { message }
        </div>}
          <div className="form__buttons">
            <Mat.Button
              variant="contained"
              color="primary"
              onClick={loginClicked}
            >
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
