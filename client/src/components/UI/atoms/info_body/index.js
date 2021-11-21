import React, { useState, useEffect } from 'react';
import { TableBody } from '@material-ui/core';
import axios from 'axios';
import Info from '../info';
const InfoBody = (props) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const lecturerFetchUsers = async () => {
            try {
                setError(null);
                setData(null);
                setLoading(true);
                const response = await axios.get(
                    `/api/instructors/getinfo/${props.username}/${props.user}`
                );
                setData(response.data.info);
                props.setCount(response.data.info.length);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        const learnerFetchUsers = async () => {
            try {
                setError(null);
                setData(null);
                setLoading(true);
                const response = await axios.get(
                    `/api/learners/classinfo/${props.user}/${props.username}`
                );
                setData(response.data.info);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        const userType = localStorage.getItem('userType');
        userType === 'lecturer' ? lecturerFetchUsers() : learnerFetchUsers();
    }, [props.currentLecturer]);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!data) return null;

    return (
        <>
            <TableBody>
                {data
                    ? data.map((c) => {
                          return (
                              <Info
                                  key={c.session_no}
                                  session_no={c.session_no}
                                  topic={c.lec_theme}
                                  studyDate={c.class_date}
                                  username={props.username}
                                  count={data.length}
                                  user={props.user}
                                  myName={props.myName}
                              />
                          );
                      })
                    : '해당 게시글을 찾을 수 없습니다.'}
            </TableBody>
        </>
    );
};

export default InfoBody;
