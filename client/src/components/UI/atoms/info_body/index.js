import React, { useState, useEffect } from 'react';
import { TableBody } from '@material-ui/core';
import axios from 'axios';
import Info from '../info';
const InfoBody = (props) => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const lecturerFetchUsers = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError(null);
                setUsers(null);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);
                const response = await axios.get(
                    `/api/instructors/getinfo/${props.username}/${props.users}`
                );
                setUsers(response.data.info); // 데이터는 response.data 안에 들어있습니다.
                props.setCount(response.data.info.length);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        const learnerFetchUsers = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError(null);
                setUsers(null);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);
                const response = await axios.get(
                    `/api/learners/classinfo/${props.user}/${props.username}`
                );
                setUsers(response.data.info); // 데이터는 response.data 안에 들어있습니다.
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        const userType = localStorage.getItem('userType');
        userType === 'lecturer' ? lecturerFetchUsers() : learnerFetchUsers();
    }, [props.currentLecturer]);
    console.log(users);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;

    return (
        <>
            <TableBody>
                {users
                    ? users.map((c) => {
                          return (
                              <Info
                                  key={c.session_no}
                                  session_no={c.session_no}
                                  topic={c.lec_theme}
                                  studyDate={c.class_date}
                                  username={props.username}
                                  count={users.length}
                              />
                          );
                      })
                    : '해당 게시글을 찾을 수 없습니다.'}
            </TableBody>
        </>
    );
};

export default InfoBody;
