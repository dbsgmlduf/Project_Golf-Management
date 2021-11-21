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
                    stickyHeader
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
                            : props.users.map((c) => {
                                  return (
                                      <Main
                                          key={c.username}
                                          name={c.username}
                                      />
                                  );
                              })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MainList;
