import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Card, useMediaQuery } from '@material-ui/core';
import StudyInfo from '../../atoms/info_list';
import useStyles from './style';

const Main = (props) => {
    const classes = useStyles();
    //media query
    const isMobile = useMediaQuery('(max-width:600px)');
    const isTablet = useMediaQuery('(max-width:1024px)');

    const [user, setUser] = useState(null); //본인이름
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUsers = useCallback(async () => {
        try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            setUser(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            const response = await axios.get('/api/learners/mylecturer');
            setUser(response.data.myLecturer.username.username);
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!user) return null;

    //상세페이지정보
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
            <StudyInfo user={user} username={props.username} />
        </Card>
    );
};

export default Main;
