import React from 'react';
import {
  Switch, Route, useLocation,
} from 'react-router-dom';
import Home from './pages/Home';

export default function Routes() {
  const location = useLocation();
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
}
