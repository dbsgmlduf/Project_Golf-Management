import React from 'react';
import { Switch } from 'react-router';
import PublicRoute from './lib/PublicRoute';
import PrivateRoute from './lib/PrivateRoute';
import LandingPage from './components/page/landingpage/LandingPage';
import RegisterPage from './components/page/registerpage/RegisterPage';
import LoginPage from './components/page/loginpage/LoginPage';
import LecturerPage from './components/page/lecturerpage/LecturerPage';
import LearnerPage from './components/page/learnerpage/LearnerPage';


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