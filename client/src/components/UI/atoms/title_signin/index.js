import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const LoginButton = () => {
    return(
        //<Button variant = "signIn" href="/login" >SIGN IN</Button>
        <Button variant = "signIn"><Link to="/login">SIGN IN</Link></Button>
    );
};

export default LoginButton;