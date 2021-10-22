import React from 'react';
import { Switch } from 'react-router';
import PublicRoute from './lib/PublicRoute';
import PrivateRoute from './lib/PrivateRoute';
import LandingPage from './components/page/LandingPage';
import RegisterPage from './components/page/RegisterPage';
import LoginPage from './components/page/LoginPage';
import LecturerPage from './components/page/LecturerPage';
import LearnerPage from './components/page/LearnerPage';


const Routes = () => {

    return(
        <Switch>
            <PublicRoute restricted={false} component={LandingPage} exact path="/"/>
            <PublicRoute restricted={false} component={RegisterPage} exact path="/register"/>
            <PublicRoute restricted={false} component={LoginPage} exact path="/login"/>
            <PrivateRoute component={LecturerPage} exact path="/lecturer"/>
            <PrivateRoute component={LearnerPage} exact path="/learner"/>
        </Switch>
    );
}

export default Routes;