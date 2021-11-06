import React from 'react';
import {Button,Link} from '@mui/material';

const LogoutButton = () => {

    const handleLogout = ()=>{
        localStorage.clear('accessToken')
    };
    return(
        //<Button variant = "signIn" href="/login" >SIGN IN</Button>
        <Button variant = "signOut" onClick={handleLogout}><Link href="/login" underline="none" color="inherit">LOGOUT</Link></Button>
    );
};

export default LogoutButton;