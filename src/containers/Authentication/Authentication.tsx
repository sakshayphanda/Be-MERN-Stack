import React, { useEffect, useState } from "react";
import styles from "./Authentication.module.sass";
import Login from "../Login/Login";
import Home from "../Home/Home";

const Authentication: React.FC = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      {!isLoggedIn ? <Login></Login> : <Home></Home>}
    </>
  );
};

export default Authentication;
