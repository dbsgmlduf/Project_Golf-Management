import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@material-ui/icons/Close';
import { Grid, Card, DialogTitle, DialogContent } from '@material-ui/core';
import Infotable from './info_table';
import ModifyButton from './info_modify';
import useStyles from './style';

const SelectInfo = (props) => {
    const classes = useStyles();
    //수정dialog open관련
    const [openModify, setOpenModify] = useState(false);
    const openHandler = (e) => {
        e.preventDefault();
        setOpenModify(true);
    };
    const closeHandler = (e) => {
        setOpenModify(false);
    };
    //세부정보데이터
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
                `/api/instructors/detailinfo/${props.username}/${props.session_no}`
            );
            setUsers(response.data.info); // 데이터는 response.data 안에 들어있습니다.
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    }, [props.username, props.session_no]);

    useEffect(() => {
        fetchUsers();
    }, [openModify]);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;

    /*EVENT HANDLER*/

    const handleClose = () => {
        props.setOpen(false);
    };

    return props.myName === props.user ? (
        <Grid>
            <Dialog fullScreen open={props.open} onClose={handleClose}>
                <DialogTitle>
                    <AppBar sx={{ position: 'relative' }}>
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleClose}
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                            <Typography
                                sx={{ ml: 2, flex: 1 }}
                                variant="h6"
                                component="div"
                            >
                                강의내용등록
                            </Typography>
                            <ModifyButton
                                username={props.username}
                                session_no={props.session_no}
                                users={users}
                                openModify={openModify}
                                openHandler={openHandler}
                                closeHandler={closeHandler}
                            />
                        </Toolbar>
                    </AppBar>
                </DialogTitle>
                <DialogContent>
                    <Infotable username={props.username} users={users} />
                </DialogContent>
            </Dialog>
        </Grid>
    ) : (
        <Grid>
            <Dialog fullScreen open={props.open} onClose={handleClose}>
                <Card className={classes.lecturerCard}>
                    <DialogTitle>
                        <AppBar sx={{ position: 'relative' }}>
                            <Toolbar>
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    onClick={handleClose}
                                    aria-label="close"
                                >
                                    <CloseIcon />
                                </IconButton>
                                <Typography
                                    sx={{ ml: 2, flex: 1 }}
                                    variant="h6"
                                    component="div"
                                >
                                    강의내용등록
                                </Typography>
                            </Toolbar>
                        </AppBar>
                    </DialogTitle>
                    <DialogContent>
                        <Infotable
                            username={props.username}
                            session_no={props.session_no}
                            users={users}
                        />
                    </DialogContent>
                </Card>
            </Dialog>
        </Grid>
    );
};

export default SelectInfo;
