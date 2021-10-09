/*import module*/
import React, {useEffect, useState} from 'react';

/*import router*/
import {Route, Switch,BrowserRouter as Router} from 'react-router-dom';

/*import routes*/
import Routes from './routes';

/*import css*/
import './App.css';

//test fork
const App = () => {
  return (
    <Router>
      <Switch>
        <Routes/>
      </Switch>
    </Router>
  );
}

export default App;
