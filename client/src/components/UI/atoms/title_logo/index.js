import { Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './style';

const Title = () => {
    const classes = useStyles();
    return (<Typography variant='h4' className={classes.title}>GOLFTAK</Typography> );

};
export default Title;