import React from 'react';
import {Button,Link} from '@mui/material';

const RegisterButton = () => {
    return(
        //<Button variant = "signIn" href="/login" >SIGN IN</Button>
        <Button variant = "register"><Link href="/register" underline="none" color="red">SIGN UP</Link></Button>
    );
};

export default RegisterButton;