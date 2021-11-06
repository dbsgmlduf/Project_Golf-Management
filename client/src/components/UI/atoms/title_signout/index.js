import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'

const LogoutButton = () => {

    const handleLogout = () => {
        localStorage.clear('accessToken')
    };
    return (
        //<Button variant = "signIn" href="/login" >SIGN IN</Button>
        <Button variant="signOut" onClick={handleLogout}><Link to="/login" style={{ textDecoration: 'none', color:"inherit" }}>LOGOUT</Link></Button>
    );
};

export default LogoutButton;