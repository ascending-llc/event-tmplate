import React from 'react';
import {
  Switch, Route, useLocation,
} from 'react-router-dom';

export default function Routes() {
  const location = useLocation();
  return (
    <Switch>
      <Route exact path="/" />
    </Switch>
  );
}
