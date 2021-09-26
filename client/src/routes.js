import React from 'React';
import { Switch } from 'react-router';
import PublicRoute from './lib/PublicRoute';
import PrivateRoute from './lib/PrivateRoute';
import LandingPage from './components/page/LandingPage';
import RegisterPage from './components/page/RegisterPage';
import LoginPage from './components/page/LoginPage';

const Routes = () => {

    return(
        <Switch>
            <PublicRoute restricted={false} component={LandingPage} exact path="/"/>
            <PublicRoute restricted={false} component={RegisterPage} exact path="/register"/>
            <PublicRoute restricted={false} component={LoginPage} exact path="/login"/>
        </Switch>
    );
}

export default Routes;