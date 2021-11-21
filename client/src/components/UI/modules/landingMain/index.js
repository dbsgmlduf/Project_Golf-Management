import React from 'react';
import useStyles from './style';
const Main = () => {
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <h1 className="testText1">❗THIS IS LANDING PAGE❗</h1>
        </div>
    );
};

export default Main;
