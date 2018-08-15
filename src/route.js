import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./compnents/Login/Login";
import Profile from "./compnents/Profile/Profile";
import Form from "./compnents/Form/Form";

export default (
  <Switch>
    <Route path="/login" component={Login} />
    <Route exact path="/" component={Profile} />
    <Route path="/form" component={Form} />
  </Switch>
);
