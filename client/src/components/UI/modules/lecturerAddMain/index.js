import { Card, useMediaQuery } from '@mui/material';
import React from 'react';
import AddLearner from '../../atoms/learner_add';
import useStyles from './style';

const Main = () => {
    const classes = useStyles();
    //media query
    const isMobile = useMediaQuery('(max-width:600px)');
    const isTablet = useMediaQuery('(max-width:1024px)');
    return (
        <Card
            className={
                isMobile
                    ? classes.cardModible
                    : isTablet
                    ? classes.cardTablet
                    : classes.card
            }
            elevation={10}
        >
            <AddLearner />
        </Card>
    );
};

export default Main;
