import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableFooter, TablePagination } from "@material-ui/core";
import React, { useState } from "react";
import Info from "../info";
import useStyles from "./style";
const info = [
    {
        'num': 1,
        'studyDate': '21-09-02',
        'topic': '실생활에서 사용할 수 있는 기술'
    },


]

const StudyInfo = () => {
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
            <Table aria-label="customer week study info" className={classes.table} sx={{ minWidth: 650 }} >
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Num</TableCell>
                        <TableCell align="center">강의진행날짜</TableCell>
                        <TableCell align="center" className={classes.topic}>강의주제</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {info.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
                        .map(c => {
                            return <Info key={c.no} num={c.num} studyDate={c.studyDate} topic={c.topic} />
                        })}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            count={info.length}
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

export default StudyInfo;