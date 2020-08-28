import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";

import AuthUserContext from "contexts/AuthUserContext";

import { HOME } from "constants/routes";
import { authLogin } from "utils/AuthService";

import {message} from "antd";
import { FAIL } from "constants/messages";

function Auth({ children, history }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [jwtToken, setJwtToken] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const session = localStorage.getItem("session");
    if (session) {
      setIsAuthenticated(true);
      setJwtToken(session);
      setUserData(jwt_decode(session));
    } else {
      setIsAuthenticated(false);
      setJwtToken(null);
      setUserData(null);
    }
  }, [jwtToken]);

  const login = (username, password) =>
    authLogin(username, password)
      .then(response => {
        if (response.data.status === FAIL) {
          message.warning(response.data.message);
        } else {
          var decoded = jwt_decode(response.data.token);
          localStorage.setItem("session", JSON.stringify(response.data.token));
          setIsAuthenticated(true);
          setJwtToken(response.data.token);
          setUserData(decoded);
          history.push(HOME);
        }
      })
      .catch(error => {
        console.log(JSON.stringify(error));
        message.error(error.message);
        setIsAuthenticated(false);
      });

  const logout = () => {
    localStorage.removeItem("session", null);
    setIsAuthenticated(false);
    setJwtToken(null);
    setUserData(null);
  };

  return (
    <AuthUserContext.Provider
      value={{
        isAuthenticated,
        userData,
        login,
        logout
      }}
    >
      {children}
    </AuthUserContext.Provider>
  );
}

export default withRouter(Auth);