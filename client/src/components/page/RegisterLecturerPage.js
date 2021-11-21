import { Grid } from '@mui/material';
import React from 'react';
import Header from '../UI/modules/header/Header';
import Main from '../UI/modules/registerLecturer';

const RegisterLecturerPage = (props) => {
    return (
        <Grid>
            <Header />
            <Main />
        </Grid>
    );
};

export default RegisterLecturerPage;
