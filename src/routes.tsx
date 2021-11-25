import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import App from "./App";
import Login from "./auth";
import Dashboard from "./dashboard";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/"} component={App} />
        <Route exact path={"/dashboard/:name"} component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default Routes;
