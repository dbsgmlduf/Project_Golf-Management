import React from 'react';
import { Switch } from 'react-router';
import PublicRoute from './lib/PublicRoute';
import PrivateRoute from './lib/PrivateRoute';
import LandingPage from './components/page/LandingPage';
import RegisterPage from './components/page/RegisterPage';
import LoginPage from './components/page/LoginPage';
import LecturerMainPage from './components/page/LecturerMainPage';
import LecturerInfoPage from './components/page/LecturerInfoPage';
import LearnerPage from './components/page/LearnerPage';


const Routes = () => {

    return(
        <Switch>
            <PublicRoute restricted={false} component={LandingPage} exact path="/"/>
            <PublicRoute restricted={false} component={RegisterPage} exact path="/register"/>
            <PublicRoute restricted={false} component={LoginPage} exact path="/login"/>
            <PublicRoute restricted={false} component={LecturerMainPage} exact path="/lecturer"/>
            <PublicRoute restricted={false} component={LecturerInfoPage} exact path="/lecturer/info/:id"/>
            <PublicRoute restricted={false} component={LearnerPage} exact path="/learner"/>
        </Switch>
    );
}

export default Routes;