import React, { useState } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AddStudy from '../add_study';
import LecturersButton from '../info_lecturers';
import useStyles from './style';

const InfoAppBar = (props) => {
    const classes = useStyles();

    //lecturer list dialog
    const [openLecturers, setOpenLecturers] = useState(false);
    const handleOpenLecturers = () => {
        setOpenLecturers(true);
    };
    const handleCloseLecturers = () => {
        setOpenLecturers(false);
    };
    //addstudy dialog
    const [openStudy, setOpenStudy] = useState(false);
    const handleOpenStudy = () => {
        setOpenStudy(true);
    };
    const handleCloseStudy = () => {
        setOpenStudy(false);
    };

    const userType = localStorage.getItem('userType');
    return (
        <AppBar position="static" className={classes.appbar} elevation={10}>
            <Toolbar>
                <Typography
                    className={classes.title}
                    variant="h6"
                    color="inherit"
                    noWrap
                >
                    {props.username}강의 정보
                </Typography>
                {userType === 'lecturer' ? (
                    <>
                        <LecturersButton
                            lecturers={props.lecturers}
                            setUser={props.setUser}
                            setCurrent={props.setCurrent}
                            openLecturers={openLecturers}
                            setOpenLecturers={setOpenLecturers}
                            handleOpenLecturers={handleOpenLecturers}
                            handleCloseLecturers={handleCloseLecturers}
                        />
                        <AddStudy
                            username={props.username}
                            count={props.count}
                            lecturers={props.lecturers}
                            openStudy={openStudy}
                            setOpenStudy={setOpenStudy}
                            handleOpenStudy={handleOpenStudy}
                            handleCloseStudy={handleCloseStudy}
                        />
                    </>
                ) : null}
            </Toolbar>
        </AppBar>
    );
};

export default InfoAppBar;
