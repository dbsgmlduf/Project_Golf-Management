import React from 'react';
import {Button,Link} from '@mui/material';

const LoginButton = () => {
    return(
        //<Button variant = "signIn" href="/login" >SIGN IN</Button>
        <Button variant = "signIn"><Link href="/login" underline="none" color="red">SIGN IN</Link></Button>
    );
};

export default LoginButton;