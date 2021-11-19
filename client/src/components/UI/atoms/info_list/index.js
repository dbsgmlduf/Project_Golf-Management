import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Paper,
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Grid,
} from '@material-ui/core';
import useStyles from './style';
import UserProfile from '../info_profile';
import InfoBody from '../info_body';
const StudyInfo = (props) => {
    const classes = useStyles();

    //상세페이지정보
    const [users, setUsers] = useState(null); //현재선택된 강사
    const [lecturers, setLecturers] = useState(null); //회원이 등록한 강사 리스트
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [count, setCount] = useState(0);
    const [currentLecturer, setCurrent] = useState(null);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError(null);
                setUsers(null);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);
                const response = await axios.get(
                    `/api/instructors/${props.username}`
                );
                setUsers(response.data.list.user.username);
                setLecturers(response.data.list.result);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        fetchUsers();
    }, []);
    console.log(users);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;
    return (
        <Grid>
            <UserProfile
                username={props.username}
                count={count}
                lecturers={lecturers}
                setUsers={setUsers}
                setCurrent={setCurrent}
            />
            <TableContainer component={Paper} className={classes.paper}>
                <Table
                    aria-label="customer week study info"
                    className={classes.table}
                    sx={{ minWidth: 650 }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">회차</TableCell>
                            <TableCell align="center" className={classes.topic}>
                                강의주제
                            </TableCell>
                            <TableCell align="center">강의진행날짜</TableCell>
                            <TableCell align="center">세부조회</TableCell>
                        </TableRow>
                    </TableHead>
                    <InfoBody
                        username={props.username}
                        users={users}
                        setCount={setCount}
                        currentLecturer={currentLecturer}
                    />
                </Table>
            </TableContainer>
        </Grid>
    );
};

export default StudyInfo;
