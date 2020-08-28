import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthUserContext from "contexts/AuthUserContext";
import {
  Layout} from "antd";
import { LOGIN } from "constants/routes";
import NavBar from "./NavBar";

const PrivateRoute = ({ component: Component, ...otherProps }) => {
  const { logout } = useContext(AuthUserContext);
  const session = localStorage.getItem("session");
  const { Header, Content } = Layout;

  return (
    <Route
      {...otherProps}
      render={props =>
        session ? (
          <>
            <Layout className="layout">
              <Header>
                <NavBar logout={logout}></NavBar>
              </Header>
              <Content>
                <Component {...props} />
              </Content>
            </Layout>
          </>
        ) : (
          <Redirect
            to={otherProps.redirectTo ? otherProps.redirectTo : LOGIN}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
