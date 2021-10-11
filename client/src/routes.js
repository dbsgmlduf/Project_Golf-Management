import React from 'react';
import { Switch } from 'react-router';
import PublicRoute from './lib/PublicRoute';
import PrivateRoute from './lib/PrivateRoute';
import LandingPage from './components/page/LandingPage';
import RegisterPage from './components/page/RegisterPage';
import LoginPage from './components/page/LoginPage';
import LecturePage from './components/page/LecturePage';

const Routes = () => {

    return(
        <Switch>
            <PublicRoute restricted component={LandingPage} exact path="/"/>
            <PublicRoute restricted component={RegisterPage} exact path="/register"/>
            <PublicRoute restricted component={LoginPage} exact path="/login"/>
            <PrivateRoute component={LecturePage} exact path="/lecture"/>
        </Switch>
    );
}

export default Routes;