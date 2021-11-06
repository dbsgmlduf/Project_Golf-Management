import React from 'react';
import LoginButton from '../../atoms/title_signin/';
import RegisterButton from '../../atoms/title_signup/';
import isLogin from '../../../../lib/isLogin';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import useStyles from './style';
import { Link } from 'react-router-dom';
import LearnerMenu from '../../atoms/menu_learner';
import LecturerMenu from '../../atoms/menu_lecturer'
import Title from '../../atoms/title_logo/';


const Header = () => {
    const classes = useStyles();
    const userType = localStorage.getItem('userType')

    if (isLogin()) {
        return (

            <div>
                <AppBar className={classes.appbar} elevation={0}>
                    <Toolbar>
                        <Typography className={classes.title}>
                            {userType === "learner" ? (<Link to="/learner"><Title /></Link>)
                                : (<Link to="/lecturer"><Title /></Link>)}
                        </Typography>
                        {userType === "learner" ? <LearnerMenu /> : <LecturerMenu />}
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
                        <Typography className={classes.title}>
                            <Link to="/"><Title /></Link>
                        </Typography>
                        <LoginButton /><RegisterButton />
                    </Toolbar>
                </AppBar>

            </div>

        );
    }
};
export default Header;
