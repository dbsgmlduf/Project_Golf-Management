import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const LogoutButton = () => {

    const handleLogout = ()=>{
        localStorage.clear('accessToken')
    };
    return(
        //<Button variant = "signIn" href="/login" >SIGN IN</Button>
        <Button variant = "signOut" onClick={handleLogout}><Link to="/login">LOGOUT</Link></Button>
    );
};

export default LogoutButton;