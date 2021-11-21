import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from '@material-ui/core';
import StudyInfo from '../../atoms/info_list';
import useStyles from './style';

const Main = (props) => {
    const classes = useStyles();

    //상세페이지정보
    const [myName, setMyName] = useState(null);
    const [user, setUser] = useState(null); //현재 선택된 강사의 이름
    const [lecturers, setLecturers] = useState(null); //회원이 등록한 정체 강사 리스트
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setError(null);
                setUser(null);
                setLoading(true);
                const response = await axios.get(
                    `/api/instructors/${props.username}`
                );
                setUser(response.data.list.user.username);
                setMyName(response.data.list.user.username);
                setLecturers(response.data.list.result);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        fetchUsers();
    }, []);
    console.log(user);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!user) return null;

    return (
        <Card className={classes.lecturerCard} elevation={10}>
            <StudyInfo
                username={props.username}
                count={count}
                lecturers={lecturers}
                setUser={setUser}
                user={user}
                setCount={setCount}
                myName={myName}
            />
        </Card>
    );
};

export default Main;
