import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableFooter, TablePagination, Paper } from "@material-ui/core";
import Customers from '../customer';
import useStyles from './style';

const customers = [
    {
        'id': 1,
        'name': '홍길동',
        'lastDate': '21-9-01',
        'nextDate': '21-10-14'
    }
    ,
    {
        'id': 2,
        'name': '나영희',
        'lastDate': '21-9-02',
        'nextDate': '21-10-13'
    }
    ,
    {
        'id': 3,
        'name': '김철수',
        'lastDate': '21-9-03',
        'nextDate': '21-10-12'
    }
    ,
]
export default function BasicTable() {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (e, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(parseInt(e.target.value, 10))
        setPage(0)
    }

    return (
        <TableContainer component={Paper} className={classes.paper}>
            <Table sx={{ minWidth: 650 }} aria-label="lecturer main table" className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">번호</TableCell>
                        <TableCell align="center">이름</TableCell>
                        <TableCell align="center">최근 강의 날짜</TableCell>
                        <TableCell align="center">다음 강의 예정일</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {customers.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
                        .map(c => {
                            return <Customers key={c.id} id={c.id} name={c.name} lastDate={c.lastDate} nextDate={c.nextDate} />
                        })}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            count={customers.length}
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
}