import React, { useState } from 'react';
import LoginButton from '../../atoms/title_signin/';
import LogoutButton from '../../atoms/title_signout/';
import RegisterButton from '../../atoms/title_signup/';
import isLogin from '../../../../lib/isLogin';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import useStyles from './style';
import { Link } from 'react-router-dom';
import LandingMenu from '../../atoms/landing_menu/index';
import LearnerMenu from '../../atoms/learner_menu/index';
import Title from '../../atoms/title_logo/';


const Header = () => {
    const classes = useStyles();

    if (isLogin()) {
        return (

            <div>
                <AppBar className={classes.appbar} elevation={0}>
                    <Toolbar>
                        <LearnerMenu />
                        <Typography className={classes.title}>
                            <Link to="/"><h1>GOLFTAK</h1></Link>
                        </Typography>
                        <LogoutButton />
                    </Toolbar>
                </AppBar>

            </div>
        )
    }
    else {
        return (
            <div className={classes.container}>
                <AppBar className={classes.appbar} elevation={0}>
                    <Toolbar>
                        <LandingMenu />
                        <Typography className={classes.title}>
                            <Link to="/"><Title /></Link>
                        </Typography>
                        <LoginButton /><RegisterButton />
                    </Toolbar>
                </AppBar>
                <LandingMenu />
            </div>

        );
    }
};
export default Header;
