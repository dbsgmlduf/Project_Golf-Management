import React, { useState } from 'react';
import {
    Paper,
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Grid,
} from '@material-ui/core';
import useStyles from './style';
import InfoAppBar from '../info_appbar';
import InfoBody from '../info_body';

const StudyInfo = (props) => {
    const classes = useStyles();
    const [currentLecturer, setCurrent] = useState('React');
    const userType = localStorage.getItem('userType');
    return userType === 'lecturer' ? (
        <Grid>
            <InfoAppBar
                username={props.username}
                count={props.count}
                lecturers={props.lecturers}
                setUser={props.setUser}
                setCurrent={setCurrent}
            />
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
                            <TableCell align="center">세부조회</TableCell>
                        </TableRow>
                    </TableHead>
                    <InfoBody
                        username={props.username}
                        user={props.user}
                        setCount={props.setCount}
                        currentLecturer={currentLecturer}
                        myName={props.myName}
                    />
                </Table>
            </TableContainer>
        </Grid>
    ) : (
        <Grid>
            <InfoAppBar username={props.username} />
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
                            <TableCell align="center">세부조회</TableCell>
                        </TableRow>
                    </TableHead>
                    <InfoBody
                        username={props.username}
                        user={props.user}
                        setCount={props.setCount}
                        currentLecturer={currentLecturer}
                    />
                </Table>
            </TableContainer>
        </Grid>
    );
};

export default StudyInfo;
