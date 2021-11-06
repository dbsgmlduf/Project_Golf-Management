import React from 'react';
import useStyles from './style';

const Title = () => {
    const classes = useStyles();
    return (<h1 className={classes.title}>GOLFTAK</h1>);

};
export default Title;