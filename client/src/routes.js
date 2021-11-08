import React from 'react';
import { Switch } from 'react-router';
import PublicRoute from './lib/PublicRoute';
import PrivateRoute from './lib/PrivateRoute';
import LandingPage from './components/page/LandingPage';
import RegisterPage from './components/page/RegisterPage';
import LoginPage from './components/page/LoginPage';
import LecturerMainPage from './components/page/LecturerMainPage';
import LecturerInfoPage from './components/page/LecturerInfoPage';
import LecturerAddPage from './components/page/LecturerAddPage';
import LearnerPage from './components/page/LearnerPage';
import ProfilePage from './components/page/ProfilePage';


const Routes = () => {

    return(
        <Switch>
            <PublicRoute restricted={false} component={LandingPage} exact path="/"/>
            <PublicRoute restricted={false} component={RegisterPage} exact path="/register"/>
            <PublicRoute restricted={false} component={LoginPage} exact path="/login"/>
            <PrivateRoute component={LecturerMainPage} exact path="/lecturer"/>
            <PrivateRoute component={LecturerInfoPage} exact path="/lecturer/info/:id"/>
            <PrivateRoute component={LecturerAddPage} excact path ="/lecturer/addlearner"/>
            <PrivateRoute component={ProfilePage} excact path ="/lecturer/myprofile"/>
            <PrivateRoute component={LearnerPage} exact path="/learner"/>
            <PrivateRoute component={ProfilePage} excact path ="/learner/myprofile"/>
        </Switch>
    );
}

export default Routes;