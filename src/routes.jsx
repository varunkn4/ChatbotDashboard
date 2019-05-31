import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

import Login from './pages/login';
import Dashboard from './pages/dashboard/Dashboard';
import Insights from './pages/insights/Insights';

export default (
  <Route>
    <Switch>
       <Redirect from="/" to="/login" exact={true} />
       <Route path="/login" component={Login} />
       <Route path="/dashboard" component={Dashboard} />
       <Route path="/insights" component={Insights} />
    </Switch>
  </Route>
);
