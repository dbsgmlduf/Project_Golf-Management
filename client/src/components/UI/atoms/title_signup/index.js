import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const RegisterButton = () => {
    return(
        //<Button variant = "signIn" href="/login" >SIGN IN</Button>
        <Button variant = "register"><Link to="/register">SIGN UP</Link></Button>
    );
};

export default RegisterButton;