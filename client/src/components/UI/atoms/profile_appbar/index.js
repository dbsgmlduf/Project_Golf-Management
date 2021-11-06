import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import useStyles from './style';
import ModifyButton from '../button_modify';

const ProfileAppbar = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.appbar} elevation={10}>
            <Toolbar>
                <Typography className={classes.title} variant="h4" color="inherit" noWrap>
                    사용자 정보
                </Typography>
                <ModifyButton/>
            </Toolbar>
        </AppBar>
    )
}

export default ProfileAppbar;