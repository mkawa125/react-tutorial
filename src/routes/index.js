import React from 'react';
import { Switch, Route } from 'react-router';
import Home from "../components/Form";
import AuthenticatedRoutes from './routes/privateRoutes'

 
export default function Routes() {
  return (
    <Switch>
      <AuthenticatedRoutes path="/" exact component={Home} />
      <AuthenticatedRoutes path="/register" component={Home} />
      <AuthenticatedRoutes path="/dashboard" component={Home} isPrivate />
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={Home} />
    </Switch>
  );
}