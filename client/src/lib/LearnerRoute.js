import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isLogin from './isLogin';
import isLecturer from './isLecturer';

const LearnerRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                isLogin() && !isLecturer() ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );
};

export default LearnerRoute;
