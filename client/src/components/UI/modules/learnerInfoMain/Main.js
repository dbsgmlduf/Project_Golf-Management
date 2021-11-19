import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from '@material-ui/core';
import StudyInfo from '../../atoms/info_list';
import useStyles from './style';

const Main = (props) => {
    const classes = useStyles();

    //상세페이지정보
    const [users, setUsers] = useState(null); //현재선택된 강사
    const [lecturers, setLecturers] = useState(null); //회원이 등록한 강사 리스트
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError(null);
                setUsers(null);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);
                const response = await axios.get(`/api/learners/mylecturer`);
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
        <Card className={classes.lecturerCard} elevation={10}>
            <StudyInfo
                username={props.username}
                count={count}
                lecturers={lecturers}
                setUsers={setUsers}
                users={users}
                setCount={setCount}
            />
        </Card>
    );
};

export default Main;
