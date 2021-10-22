import React from 'react';
import LoginButton from '../UI/atoms/login_button/index';
import LogoutButton from '../UI/atoms/logout_button/index';
import RegisterButton from '../UI/atoms/register_button/index';
import isLogin from '../../lib/isLogin';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@material-ui/core';
import useStyles from './style';
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from 'react-router-dom';



const Header = () => {
    const classes = useStyles();
    if (isLogin()) {
        return (

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton><menuIcon /></IconButton>
                        <Typography className={classes.title}>
                            <Link to="/"><h1>GOLFTAK</h1></Link>
                        </Typography>
                        <LogoutButton />
                    </Toolbar>
                </AppBar>
            </Box>
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
