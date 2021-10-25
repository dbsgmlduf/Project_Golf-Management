import React, { useState } from 'react';
import LoginButton from '../../atoms/title_signin/index';
import LogoutButton from '../../atoms/title_signout/index';
import RegisterButton from '../../atoms/title_signup/index';
import isLogin from '../../../../lib/isLogin';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import useStyles from './style';
import { Link } from 'react-router-dom';
import LandingMenu from '../../atoms/landing_menu';
import LearnerMenu from '../../atoms/learner_menu';


const Header = () => {
    const classes = useStyles();

    if (isLogin()) {
        return (

            <div>
                <AppBar className={classes.appbar} elevation={0}>
                    <Toolbar>
                        <LearnerMenu/>
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
                            <Link to="/"><h1>GOLFTAK</h1></Link>
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
