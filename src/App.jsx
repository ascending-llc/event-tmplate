import React from 'react';
import './App.css';
import { AppBar, Button } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
// import { makeStyles } from '@material-ui/core/styles';

function App() {
  // const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <div className="">
      <AppBar position="static">
        {matches ? (
          <div>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Demo Page</Button>
          </div>
        ) : (
          <div>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Demo Page</Button>
            <Button color="inherit">Sign in</Button>
          </div>
        )}
      </AppBar>
    </div>
  );
}

export default App;
