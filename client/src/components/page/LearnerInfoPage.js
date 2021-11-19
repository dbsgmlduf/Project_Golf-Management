import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Header from '../UI/modules/header/Header';
import Main from '../UI/modules/learnerInfoMain/Main';
import Footer from '../UI/modules/footer/Footer';
import { Grid } from '@material-ui/core';

const LearnerInfoPage = (props) => {
    const [user, setUser] = useState(null);
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

    return (
        <Grid>
            <Header />
            <Main username={props.match.params.username} user={user} />
            <Footer />
        </Grid>
    );
};

export default LearnerInfoPage;
