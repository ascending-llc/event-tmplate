import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <div className="">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
