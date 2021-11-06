import React from 'react';
import LoginButton from '../../atoms/title_signin/';
import RegisterButton from '../../atoms/title_signup/';
import isLogin from '../../../../lib/isLogin';
import { AppBar, Toolbar, Typography,Link } from '@material-ui/core';
import useStyles from './style';
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
                            {userType === "learner" ? (<Link href="/learner" underline="none"><Title /></Link>)
                                : (<Link href="/lecturer" underline="none"><Title /></Link>)}
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
                            <Link href="/" underline="none"><Title /></Link>
                        </Typography>
                        <LoginButton /><RegisterButton />
                    </Toolbar>
                </AppBar>

            </div>

        );
    }
};
export default Header;
