import 'antd/dist/antd.css'
import React from "react";
import { Route, Switch } from "react-router-dom";

import * as routes from "constants/routes";
import PrivateRoute from 'components/PrivateRoute';

import Error404 from "./Error404";
import LoginPage from "./Login";
import RegisterPage from "./Register";
import HomePage from "./Home";
import DetailsPage from "./GameDetails";

const App = () => {
  return(
    <Switch>
        <Route exact path={routes.LOGIN} component={() => <LoginPage />} />
        <Route exact path={routes.REGISTER} component={() => <RegisterPage />} />
        <PrivateRoute exact path={routes.HOME} component={() => <HomePage />} />
        <PrivateRoute path={routes.GAME_DETAILS + '/:rawgid'} component={() => <DetailsPage />} />
        {/* Catch all */}
        <Route component={() => <Error404 />} />
    </Switch>
  )
};

export default App;