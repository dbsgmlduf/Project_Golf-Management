import { Card, useMediaQuery } from '@material-ui/core';
import React from 'react';
import ProfileAppbar from '../../atoms/profile_appbar';
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
        >
            <ProfileAppbar />
        </Card>
    );
};
export default Main;
