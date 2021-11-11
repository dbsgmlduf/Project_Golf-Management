import React from 'react';
import LoginButton from '../../atoms/title_signin/';
import RegisterButton from '../../atoms/title_signup/';
import isLogin from '../../../../lib/isLogin';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom'
import useStyles from './style';
import LearnerMenu from '../../atoms/menu_learner';
import LecturerMenu from '../../atoms/menu_lecturer'
import Title from '../../atoms/title_logo/';


const Header = () => {
    const classes = useStyles();
    const userType = localStorage.getItem('userType')

    return (

        <div>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar>
                    <Typography className={classes.title}>
                        <Link to="/" style={{ textDecoration: 'none' }}><Title /></Link>
                    </Typography>
                    {!isLogin() ? <div><LoginButton /><RegisterButton /></div> : (userType === "learner" ? <LearnerMenu /> : <LecturerMenu />)}
                </Toolbar>
            </AppBar>

        </div>
    )

};
export default Header;
