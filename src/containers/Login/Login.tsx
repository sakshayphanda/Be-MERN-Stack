import React from "react";
import './Login.sass';
import logo from '../../assets/logo.svg';
import * as Mat from '@material-ui/core';
function Login() {
  return (
  <div className="login">
    <div className="login__content">
      <div className="title">
      <img src={logo} height="40px" className="App-logo" alt="logo" />
      </div>
      <div className="auth-type">
        REGISTER
      </div>
      <div className="social-signin"></div>

      <form className="form">
        <div className="form__inputs">
          <Mat.TextField className="textField" variant="outlined" label="First Name"></Mat.TextField>
          <Mat.TextField className="textField" variant="outlined" label="Last Name"></Mat.TextField>
          <Mat.TextField className="textField" variant="outlined" label="Email"></Mat.TextField>
          <Mat.TextField className="textField" variant="outlined" label="Password"></Mat.TextField>
        </div>
        <div className="form__buttons">
          <Mat.Button variant="contained" color="primary">Login</Mat.Button>
          <Mat.Button variant="outlined" color="secondary"> Register {'>'}</Mat.Button>

        </div>
      </form>
    </div>
  </div>
);}

export default Login;
