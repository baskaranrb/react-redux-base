import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IndexPage from './page';
import HomePage from './page/home';
import LoginPage from './page/login';
import NotFound from './page/not-found';

export default () => (
  <div>
  <Router>
    <Switch>
      <Route exact path="/" component={IndexPage}></Route>
      <Route exact path="/login" component={LoginPage}></Route>
      <Route exact path="/home" component={HomePage}></Route>
      <Route exact path="*" component={NotFound}></Route>
    </Switch>
  </Router>
  </div>
)