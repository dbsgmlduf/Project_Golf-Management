import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableFooter,
    TablePagination,
    Paper,
} from '@material-ui/core';
import useStyles from './style';
import Main from '../main';
import SearchBar from '../main_search';

const MainList = (props) => {
    const classes = useStyles();

    //search
    const [serchKeyword, setSearchKeyWord] = useState();
    //search event handler
    const handleSeachKey = (e) => {
        setSearchKeyWord(e.currentTarget.value);
    };

    //data search
    const filteredData = (data) => {
        data = data.filter((c) => {
            return c.username.indexOf(serchKeyword) > -1;
        });
        return data.map((c) => {
            return <Main key={c.username} name={c.username} />;
        });
    };
    //page
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    //page event handler
    const handleChangePage = (e, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(parseInt(e.target.value, 10));
        setPage(0);
    };

    return (
        <div>
            <SearchBar
                userName={props.userName}
                value={serchKeyword}
                handleSeachKey={handleSeachKey}
            />
            <TableContainer component={Paper} className={classes.paper}>
                <Table
                    sx={{ minWidth: 650 }}
                    aria-label="lecturer main table"
                    className={classes.table}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">이름</TableCell>
                            <TableCell align="center">삭제</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {serchKeyword
                            ? filteredData(props.users)
                            : props.users
                                  .slice(
                                      page * rowsPerPage,
                                      (page + 1) * rowsPerPage
                                  )
                                  .map((c) => {
                                      return (
                                          <Main
                                              key={c.username}
                                              name={c.username}
                                          />
                                      );
                                  })}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                count={props.users.length}
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
};

export default MainList;
