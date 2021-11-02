import React, { useState, useEffect } from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableFooter, TablePagination } from "@material-ui/core";
import useStyles from "./style";
import Lecturers from "../lecturer";
import { lecturers } from "../../../../Data";
const LecturerList = () => {
    const classes = useStyles();
    //강사정보
    const [data, setData] = useState([]);
    useEffect(()=>{
        setData(lecturers);
    },[])
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


    return (
        <TableContainer component={Paper} className={classes.paper}>
            <Table aria-label="lecturer list" className={classes.table} sx={{ minWidth: 650 }} >
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Num</TableCell>
                        <TableCell align="center">강사 이름</TableCell>
                        <TableCell align="center" className={classes.topic}>강사유형</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data ? data.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
                        .map(c => {
                            return <Lecturers key={c.id} id={c.id} name={c.name} lecturerType={c.type} />
                        }) : '해당 게시글을 찾을 수 없습니다.'}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            count={data.length}
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