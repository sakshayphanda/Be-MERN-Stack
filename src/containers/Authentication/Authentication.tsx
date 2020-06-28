import React, { useEffect, useState } from "react";
import "./Authentication.sass";
import Login from '../Login/Login';
import Home from '../Home/Home';
import Dashboard from '../Dashboard/dashboard';

const Authentication: React.FC = () => {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  useEffect(() => {
    return () => {};
  }, []);

  return (<>{!isLoggedIn ? <Login></Login> : <Dashboard></Dashboard>}</>);
};

export default Authentication;
