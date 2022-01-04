import React from 'react';
import { Switch } from 'react-router';
import PublicRoute from './lib/PublicRoute';
import LecturerRoute from './lib/LecturerRoute';
import LearnerRoute from './lib/LearnerRoute';
import LandingPage from './components/page/LandingPage';
import RegisterMainPage from './components/page/RegisterMainPage';
import RegisterLecturerPage from './components/page/RegisterLecturerPage';
import RegisterLearnerPage from './components/page/RegisterLearnerPage';
import LoginPage from './components/page/LoginPage';
import LecturerMainPage from './components/page/LecturerMainPage';
import LecturerInfoPage from './components/page/LecturerInfoPage';
import LecturerAddPage from './components/page/LecturerAddPage';
import LearnerMainPage from './components/page/LearnerMainPage';
import LearnerInfoPage from './components/page/LearnerInfoPage';
import LearnerAddPage from './components/page/LearnerAddPage';
import ProfilePage from './components/page/ProfilePage';
import CalendarPage from './components/page/CalendarPage';

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
                component={RegisterMainPage}
                path="/register"
                exact
            />
            <PublicRoute
                restricted={true}
                component={RegisterLecturerPage}
                path="/register/lecturer"
                exact
            />
            <PublicRoute
                restricted={true}
                component={RegisterLearnerPage}
                path="/register/learner"
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
            <LecturerRoute
                component={CalendarPage}
                path="/lecturer/calendar"
                exact
            />
            <LearnerRoute component={LearnerMainPage} path="/learner" exact />
            <LearnerRoute
                component={LearnerInfoPage}
                path="/learner/info/:username"
                exact
            />
            <LearnerRoute
                component={LearnerAddPage}
                path="/learner/addlecturer"
                exact
            />
            <LearnerRoute
                component={ProfilePage}
                path="/learner/myprofile"
                exact
            />
            <LearnerRoute
                component={CalendarPage}
                path="/learner/calendar"
                exact
            />
        </Switch>
    );
};

export default Routes;
