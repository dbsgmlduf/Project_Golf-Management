import React, { useState, useEffect, useCallback } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableFooter, TablePagination, Paper } from "@material-ui/core";
import Learners from '../learner';
import useStyles from './style';
import LearnerSearchBar from '../learner_search';
import axios from 'axios';

const LearnerList = () => {
    const classes = useStyles();

    //search
    const [serchKeyword, setSearchKeyWord] = useState();
    //search event handler
    const handleSeachKey = (e) => {
        setSearchKeyWord(e.currentTarget.value);
    };

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
                '/api/instructors/mylearner'
            );
            setUsers(response.data.list); // 데이터는 response.data 안에 들어있습니다.
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers])
    //data search
    const filteredData = (data) => {
        data = data.filter((c) => {
            return c.username.indexOf(serchKeyword) > -1;
        });
        return data.map((c) => {
            return <Learners key={c.username} name={c.username} />
        })
    }
    //page
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    //page event handler
    const handleChangePage = (e, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(parseInt(e.target.value, 10))
        setPage(0)
    }

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;

    return (
        <div>
            <LearnerSearchBar value={serchKeyword} handleSeachKey={handleSeachKey} />
            <TableContainer component={Paper} className={classes.paper}>
                <Table sx={{ minWidth: 650 }} aria-label="lecturer main table" className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">이름</TableCell>
                            <TableCell align="center">삭제</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {serchKeyword ? filteredData(users) : users.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
                            .map(c => {
                                return <Learners key={c.username} name={c.username} />
                            })}
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
        </div>
    );
}

export default LearnerList;