import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

export default function RouteApp() {
  return (
    <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
    </Switch>
  );
}
