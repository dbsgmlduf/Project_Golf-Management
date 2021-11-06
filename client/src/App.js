/*import module*/
import React from 'react';

/*import router*/
import { Switch, BrowserRouter as Router } from 'react-router-dom';

/*import routes*/
import Routes from './routes';

//test fork
const App = () => {
  return (
    <Router>
      <Switch>
        <Routes />
      </Switch>
    </Router>
  );
}

export default App;
