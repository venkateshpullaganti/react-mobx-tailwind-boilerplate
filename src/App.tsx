import React, { FC } from "react";
import { History } from "history";
import { Router, Route, Switch } from "react-router";
import IssuesRoute from "Routes/IssuesRoute";

const App = ({ history }: { history: History }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={IssuesRoute} />
      </Switch>
    </Router>
  );
};

export default App;
