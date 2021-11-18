import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const LoginButton = () => {
    return (
        //<Button variant = "signIn" href="/login" >SIGN IN</Button>
        <Button variant="signIn">
            <Link
                to="/login"
                style={{ textDecoration: 'none', color: 'inherit' }}
            >
                SIGN IN
            </Link>
        </Button>
    );
};

export default LoginButton;
