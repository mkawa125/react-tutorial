import React from 'react';
import { Switch, Route } from 'react-router';
import Home from "../components/Form";
 
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/register" component={Home} />
      <Route path="/dashboard" component={Home} isPrivate />
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={Home} />
    </Switch>
  );
}