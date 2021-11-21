import { Grid } from '@mui/material';
import React from 'react';
import Header from '../UI/modules/header/Header';
import Main from '../UI/modules/registerMain';

const RegisterMainPage = (props) => {
    return (
        <Grid>
            <Header />
            <Main />
        </Grid>
    );
};

export default RegisterMainPage;
