import React from 'react';
import LoginButton from '../UI/atoms/login_button/index';
import LogoutButton from '../UI/atoms/logout_button/index';
import RegisterButton from '../UI/atoms/register_button/index';
import isLogin from '../../lib/isLogin';
import { AppBar, Box, IconButton,makeStyles,Toolbar, Typography} from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";

const useeStyles = makeStyles((theme)=>({
    appbar:{
        background:'none',
    },
    title:{
        flexGrow:'1',
        color :'#000000',
        fontSize :'1rem',
    },
    icon:{
        color :'#000000',
        fontSize :'2rem',
    },
}));

const Header = () => {
    const classes = useeStyles();
    if(isLogin()){
        return(
            
            <Box sx={{flexGrow:1}}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton><menuIcon/></IconButton>
                        <Typography>GOLFTAK</Typography>
                        <LogoutButton/>
                    </Toolbar>
                </AppBar>
            </Box>
            )
    }
    else{
        return(
           <div>
                <AppBar className={classes.appbar} elevation={0}>
                    <Toolbar>
                        <IconButton><MenuIcon className={classes.icon}/></IconButton>
                        <Typography className={classes.title}>
                            <h1>GOLFTAK</h1>
                        </Typography>
                        <LoginButton /><RegisterButton/>
                    </Toolbar>
                </AppBar>
            </div> 
            
    );
}
};
export default Header;
