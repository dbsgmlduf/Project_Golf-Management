import { Card } from '@material-ui/core';
import React from 'react';
import ProfileAppbar from '../../atoms/profile_appbar';
import useStyles from './style';
const Main = () => {
    const classes = useStyles();
    return (
        <Card className={classes.profileCard}>
            <ProfileAppbar/>
        </Card>
    );
};
export default Main;