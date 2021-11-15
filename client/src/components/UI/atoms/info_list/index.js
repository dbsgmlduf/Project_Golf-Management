import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableFooter,
    TablePagination,
    Grid,
} from '@material-ui/core';
import Info from '../info';
import useStyles from './style';
import UserProfile from '../info_profile';
const StudyInfo = (props) => {
    const classes = useStyles();
    //상세페이지정보
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
                `/api/instructors/getinfo/${props.username}`
            );
            console.log('ddd' + response);
            setUsers(response.data.info); // 데이터는 response.data 안에 들어있습니다.
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    }, [props.username]);
    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);
    //Table
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (e, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(parseInt(e.target.value, 10));
        setPage(0);
    };

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;
    return (
        <Grid>
            <UserProfile username={props.username} count={users.length} />
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
                            <TableCell align="center">수정/삭제</TableCell>
                            <TableCell align="center">세부조회</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users
                            ? users
                                  .slice(
                                      page * rowsPerPage,
                                      (page + 1) * rowsPerPage
                                  )
                                  .map((c) => {
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
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                count={users.length}
                                page={page}
                                rowsPerPage={rowsPerPage}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </Grid>
    );
};

export default StudyInfo;
