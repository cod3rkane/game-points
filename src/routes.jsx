import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from './containers/home';
import { Main } from './containers/main';

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/home" component={Home} />
  </Switch>
);

export default Routes;
