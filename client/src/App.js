/*import module*/
import React, {useEffect, useState} from 'react';

/*import router*/
import {Route, Switch} from 'react-router-dom';

/*import routes*/
import Routes from './routes';

/*import css*/
import './App.css';

//test fork
const App = () => {
  return (
    <Switch>
      <Routes/>
    </Switch>
  );
}

export default App;
