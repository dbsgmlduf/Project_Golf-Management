import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@material-ui/icons/Close';
import { Grid, Card, DialogTitle, DialogContent } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Infotable from './info_table';
import ModifyButton from './info_modify';
import useStyles from './style';

const SelectInfo = (props) => {
    const classes = useStyles();

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
                            />
                        </Toolbar>
                    </AppBar>
                </DialogTitle>
                <DialogContent>
                    <Infotable
                        username={props.username}
                        session_no={props.session_no}
                    />
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
                        />
                    </DialogContent>
                </Card>
            </Dialog>
        </Grid>
    );
};

export default SelectInfo;
