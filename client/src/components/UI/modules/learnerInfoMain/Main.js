import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from '@material-ui/core';
import StudyInfo from '../../atoms/info_list';
import useStyles from './style';

const Main = (props) => {
    const classes = useStyles();

    //상세페이지정보
    return (
        <Card className={classes.lecturerCard} elevation={10}>
            <StudyInfo user={props.user} username={props.username} />
        </Card>
    );
};

export default Main;
