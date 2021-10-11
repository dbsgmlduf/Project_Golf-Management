import React from 'react';
import { Switch } from 'react-router';
import PublicRoute from './lib/PublicRoute';
import PrivateRoute from './lib/PrivateRoute';
<<<<<<< HEAD
import LandingPage from './components/page/LandingPage';
import RegisterPage from './components/page/RegisterPage';
import LoginPage from './components/page/LoginPage';
=======
import LandingPage from './components/page/landingpage/LandingPage';
import RegisterPage from './components/page/registerpage/RegisterPage';
import LoginPage from './components/page/loginpage/LoginPage';
import LecturePage from './components/page/lecturepage copy/LecturePage';
import LearnerPage from './components/page/learnerpage/LearnerPage';



>>>>>>> 99824670452bef3271ca4342d4b326e33b4d11f4

const Routes = () => {

    return(
        <Switch>
<<<<<<< HEAD
            <PublicRoute restricted={false} component={LandingPage} exact path="/"/>
            <PublicRoute restricted={false} component={RegisterPage} exact path="/register"/>
            <PublicRoute restricted={false} component={LoginPage} exact path="/login"/>
=======
            <PublicRoute restricted component={LandingPage} exact path="/"/>
            <PublicRoute restricted component={RegisterPage} exact path="/register"/>
            <PublicRoute restricted component={LoginPage} exact path="/login"/>
            <PrivateRoute component={LecturePage} exact path="/lecture"/>
            <PrivateRoute component={LearnerPage} exact path="/learner"/>
>>>>>>> 99824670452bef3271ca4342d4b326e33b4d11f4
        </Switch>
    );
}

export default Routes;