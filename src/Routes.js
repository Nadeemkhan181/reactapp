import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Todo from "./Components/Todo";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/Todo" exact component={Todo} />

      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
