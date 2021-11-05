import React, { useState, useEffect } from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableFooter, TablePagination } from "@material-ui/core";
import useStyles from "./style";
import Lecturers from "../lecturer";
import axios from 'axios';
const LecturerList = () => {
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
                const response = await axios.get(
                    'http://localhost:7000/api/users/list'
                );
                console.log(response);
                setUsers(response.data.list); // 데이터는 response.data 안에 들어있습니다.

                console.log("fsafs" + response.list);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };

        fetchUsers();
    }, [])
    //Table
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

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
        <TableContainer component={Paper} className={classes.paper}>
            <Table aria-label="lecturer list" className={classes.table} sx={{ minWidth: 650 }} >
                <TableHead>
                    <TableRow>
                        <TableCell align="center">강사 이름</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users ? users.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
                        .map(c => {
                            return <Lecturers key={c.username} username={c.username} />
                        }) : '해당 게시글을 찾을 수 없습니다.'}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            count={users.length}
                            page={page}
                            rowsPerPage={rowsPerPage}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
};

export default LecturerList;