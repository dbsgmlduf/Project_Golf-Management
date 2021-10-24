import React from 'react';
import LoginButton from '../../atoms/title_signin/index';
import LogoutButton from '../../atoms/title_signout/index';
import RegisterButton from '../../atoms/title_signup/index';
import isLogin from '../../../../lib/isLogin';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import useStyles from './style';
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from 'react-router-dom';



const Header = () => {
    const classes = useStyles();
    if (isLogin()) {
        return (

            <div>
                <AppBar className={classes.appbar} elevation={0}>
                    <Toolbar>
                        <IconButton><MenuIcon className={classes.icon} /></IconButton>
                        <Typography className={classes.title}>
                            <Link to="/"><h1>GOLFTAK</h1></Link>
                        </Typography>
                        <LogoutButton/>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
    else {
        return (
            <div>
                <AppBar className={classes.appbar} elevation={0}>
                    <Toolbar>
                        <IconButton><MenuIcon className={classes.icon} /></IconButton>
                        <Typography className={classes.title}>
                            <Link to="/"><h1>GOLFTAK</h1></Link>
                        </Typography>
                        <LoginButton /><RegisterButton />
                    </Toolbar>
                </AppBar>
            </div>

        );
    }
};
export default Header;
