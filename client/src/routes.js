import React from 'react';
import { Switch } from 'react-router';
import PublicRoute from './lib/PublicRoute';
import LecturerRoute from './lib/LecturerRoute';
import LearnerRoute from './lib/LearnerRoute';
import LandingPage from './components/page/LandingPage';
import RegisterPage from './components/page/RegisterPage';
import LoginPage from './components/page/LoginPage';
import LecturerMainPage from './components/page/LecturerMainPage';
import LecturerInfoPage from './components/page/LecturerInfoPage';
import LecturerAddPage from './components/page/LecturerAddPage';
import LearnerPage from './components/page/LearnerPage';
import ProfilePage from './components/page/ProfilePage';

const Routes = () => {
    return (
        <Switch>
            <PublicRoute
                restricted={false}
                component={LandingPage}
                path="/"
                exact
            />
            <PublicRoute
                restricted={true}
                component={RegisterPage}
                path="/register"
                exact
            />
            <PublicRoute
                restricted={true}
                component={LoginPage}
                path="/login"
                exact
            />
            <LecturerRoute
                component={LecturerMainPage}
                path="/lecturer"
                exact
            />
            <LecturerRoute
                component={LecturerInfoPage}
                path="/lecturer/info/:username"
                exact
            />
            <LecturerRoute
                component={LecturerAddPage}
                path="/lecturer/addlearner"
                exact
            />
            <LecturerRoute
                component={ProfilePage}
                path="/lecturer/myprofile"
                exact
            />
            <LearnerRoute component={LearnerPage} path="/learner" exact />
            <LearnerRoute
                component={ProfilePage}
                path="/learner/myprofile"
                exact
            />
        </Switch>
    );
};

export default Routes;
