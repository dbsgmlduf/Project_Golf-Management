import { Card } from '@material-ui/core';
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import useStyles from './style';
import MainList from '../../atoms/main_list';

const Main = () => {
    const classes = useStyles();

    //강사정보
    const [users, setUsers] = useState(null);
    const [userName, setUserName] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUsers = useCallback(async () => {
        try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            setUsers(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            const response = await axios.get('/api/learners/mylecturer');
            setUsers(response.data.myLecturer); // 데이터는 response.data 안에 들어있습니다.
            //setUserName(response.data.userName);
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
    if (!users) return null;

    return (
        <Card className={classes.lecturerCard}>
            <MainList users={users} userName={userName} />
        </Card>
    );
};

export default Main;
