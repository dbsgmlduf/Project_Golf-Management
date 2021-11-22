import React, { useState, useEffect, useCallback } from 'react';
import { Divider, Grid } from '@mui/material';

import axios from 'axios';
import { Paper, Typography } from '@material-ui/core';

const Infotable = (props) => {
    //강사정보
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUsers = useCallback(async () => {
        try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            setUsers(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            const response = await axios.get(
                `/api/instructors/detailinfo/${props.username}/${props.session_no}`
            );
            setUsers(response.data.info); // 데이터는 response.data 안에 들어있습니다.
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    }, [props.username, props.session_no]);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;
    return (
        <Grid>
            <Paper>
                {users.map((c) => {
                    return (
                        <>
                            <Typography
                                variant="h4"
                                component="div"
                                gutterBottom
                                align="center"
                            >
                                {c.session_no}주차 {props.username}
                            </Typography>
                            <Divider />
                            <Typography
                                variant="h4"
                                component="div"
                                gutterBottom
                                align="center"
                            >
                                주제
                            </Typography>
                            <Typography
                                variant="h6"
                                component="div"
                                gutterBottom
                                align="center"
                            >
                                {c.lec_theme}
                            </Typography>
                            <Divider />
                            <Typography
                                variant="subtitle1"
                                component={Typography}
                                gutterBottom
                                align="center"
                            >
                                강의내용
                            </Typography>
                            <Typography
                                variant="h6"
                                component="div"
                                gutterBottom
                                align="center"
                            >
                                {c.lec_contents}
                            </Typography>
                            <Divider />
                            <Typography
                                variant="h4"
                                component="div"
                                gutterBottom
                                align="center"
                            >
                                보충내용
                            </Typography>
                            <Typography
                                variant="string"
                                component="div"
                                gutterBottom
                                //align="inline-block"
                                align="center"
                            >
                                {c.supplement_item}
                            </Typography>
                            <Divider />
                            <Typography
                                variant="h4"
                                component="div"
                                gutterBottom
                                align="center"
                            >
                                강의진행날짜
                            </Typography>
                            <Typography
                                variant="h6"
                                component="div"
                                gutterBottom
                                align="center"
                            >
                                {c.class_date}
                            </Typography>
                            <Divider />
                            <Typography
                                variant="h4"
                                component="div"
                                gutterBottom
                                align="center"
                            >
                                다음강의진행날짜
                            </Typography>
                            <Typography
                                variant="h6"
                                component="div"
                                gutterBottom
                                align="center"
                            >
                                {c.next_class_date}
                            </Typography>
                        </>
                    );
                })}
            </Paper>
        </Grid>
    );
};

export default Infotable;
