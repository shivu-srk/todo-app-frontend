import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./auth";
import Dashboard from "./dashboard";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={Login} />
        <Route exact path={"/dashboard/:name"} component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default Routes;
