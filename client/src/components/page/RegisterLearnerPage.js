import React from 'react';
import { Grid } from '@mui/material';
import Header from '../UI/modules/header/Header';
import Main from '../UI/modules/registerLearner';

const RegisterLearnerPage = (props) => {
    return (
        <Grid>
            <Header />
            <Main />
        </Grid>
    );
};

export default RegisterLearnerPage;
