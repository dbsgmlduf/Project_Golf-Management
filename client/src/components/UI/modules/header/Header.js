import React from 'react';
import LoginButton from '../../atoms/title_signin/';
import RegisterButton from '../../atoms/title_signup/';
import isLogin from '../../../../lib/isLogin';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './style';
import LearnerMenu from '../../atoms/menu_learner';
import LecturerMenu from '../../atoms/menu_lecturer';

const Header = () => {
    const classes = useStyles();
    const userType = localStorage.getItem('userType');

    return (
        <div>
            <AppBar className={classes.appbar} elevation={0} position="static">
                <Toolbar>
                    <Typography
                        component={Link}
                        to="/"
                        className={classes.title}
                        style={{ textDecoration: 'none' }}
                        noWrap
                    >
                        치고보자
                    </Typography>
                    {!isLogin() ? (
                        <>
                            <LoginButton className={classes.login} />
                            <RegisterButton className={classes.register} />
                        </>
                    ) : userType === 'learner' ? (
                        <LearnerMenu className={classes.menu} />
                    ) : (
                        <LecturerMenu className={classes.menu} />
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
};
export default Header;
