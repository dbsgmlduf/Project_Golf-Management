import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material'

import axios from 'axios';
import { Paper, Typography } from '@material-ui/core';

const Infotable = (props) => {
    const classes = useStyles();

    //강사정보
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError(null);
                setUsers(null);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);
                const response = await axios.get(`/api/instructors/getinfo/${props.username}`);
                console.log(response);
                setUsers(response.data.info); // 데이터는 response.data 안에 들어있습니다.
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        fetchUsers();
    }, [])

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;

    return (
        <Grid container spacing={3}>
            <Paper>
                <Typography variant="h1" component="div" gutterBottom>
                    {users.username}
                </Typography>
                <Typography variant="h1" component="div" gutterBottom>{users.session_no}주차</Typography>
                <Typography variant="h2" component="div" gutterBottom>주제</Typography>
                <Typography variant="h4" component="div" gutterBottom>{users.lec_theme}</Typography>
                <Typography variant="h2" component="div" gutterBottom>강의내용</Typography>
                <Typography variant="h4" component="div" gutterBottom>{users.lec_contents}</Typography>
                <Typography variant="h2" component="div" gutterBottom>보충내용</Typography>
                <Typography variant="h4" component="div" gutterBottom>{users.supplement_items}</Typography>
                <Typography variant="h3" component="div" gutterBottom>강의진행날짜</Typography>
                <Typography variant="h5" component="div" gutterBottom>{users.class_date}</Typography>
                <Typography variant="h3" component="div" gutterBottom>다음강의진행날짜</Typography>
                <Typography variant="h5" component="div" gutterBottom>{users.next_class_date}</Typography>
            </Paper>
        </Grid>
    );
}

export default Infotable;