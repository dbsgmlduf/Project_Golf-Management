import React from 'react';
import { Switch } from 'react-router';
import PublicRoute from './lib/PublicRoute';
import PrivateRoute from './lib/PrivateRoute';
import LandingPage from './components/page/landingpage/LandingPage';
import RegisterPage from './components/page/registerpage/RegisterPage';
import LoginPage from './components/page/loginpage/LoginPage';
import LecturePage from './components/page/lecturepage copy/LecturePage';
import LearnerPage from './components/page/learnerpage/LearnerPage';




const Routes = () => {

    return(
        <Switch>
            <PublicRoute restricted component={LandingPage} exact path="/"/>
            <PublicRoute restricted component={RegisterPage} exact path="/register"/>
            <PublicRoute restricted component={LoginPage} exact path="/login"/>
            <PrivateRoute component={LecturePage} exact path="/lecture"/>
            <PrivateRoute component={LearnerPage} exact path="/learner"/>
        </Switch>
    );
}

export default Routes;