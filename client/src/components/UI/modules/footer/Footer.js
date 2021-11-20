import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import useStyles from './style';

const Footer = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.footer}>
            <Container maxWidth="md">
                <Toolbar>
                    <Typography variant="body1" color="inherit">
                        © 2021 치고보자
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Footer;
