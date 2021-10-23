import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const LogoutButton = () => {
    return(
        //<Button variant = "signIn" href="/login" >SIGN IN</Button>
        <Button variant = "signOut"><Link to="/login">OUT</Link></Button>
    );
};

export default LogoutButton;