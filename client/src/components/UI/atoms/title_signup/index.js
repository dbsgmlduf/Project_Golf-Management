import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const RegisterButton = () => {
    return (
        //<Button variant = "signIn" href="/login" >SIGN IN</Button>
        <Button variant="register">
            <Link
                to="/register"
                style={{ textDecoration: 'none', color: 'red' }}
            >
                SIGN UP
            </Link>
        </Button>
    );
};

export default RegisterButton;
