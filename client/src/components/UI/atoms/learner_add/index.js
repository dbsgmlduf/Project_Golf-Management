import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Grid,
    Table,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from '@material-ui/core';
import AddTable from './add_table';
import AddSearchBar from './add_searchbar';

const AddLearner = () => {
    //search
    const [serchKeyword, setSearchKeyWord] = useState();
    //search event handler
    const handleSeachKey = (e) => {
        setSearchKeyWord(e.currentTarget.value);
    };
    //data search
    const filteredData = (data) => {
        data = data.filter((c) => {
            return c.learner.username.indexOf(serchKeyword) > -1;
        });
        return data.map((c) => {
            return (
                <AddTable
                    key={c.learner.username}
                    username={c.learner.username}
                />
            );
        });
    };

    //등록요청학생정보
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
                const response = await axios.get('/api/instructors/request');
                setUsers(response.data.request); // 데이터는 response.data 안에 들어있습니다.
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };

        fetchUsers();
    }, []);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;

    return (
        <Grid>
            <AddSearchBar
                value={serchKeyword}
                handleSeachKey={handleSeachKey}
            />
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">회원 이름</TableCell>
                            <TableCell align="center">회원 추가</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {serchKeyword
                            ? filteredData(users)
                            : users.map((c) => {
                                  return (
                                      <AddTable
                                          key={c.learner.username}
                                          username={c.learner.username}
                                      />
                                  );
                              })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
};

export default AddLearner;
