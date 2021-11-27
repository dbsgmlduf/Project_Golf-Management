import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import {
    DialogTitle,
    List,
    ListItem,
    ListItemText,
    useMediaQuery,
} from '@mui/material';
const LecturersButton = (props) => {
    //media query
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <>
            <Button
                onClick={props.handleOpenLecturers}
                variant="contained"
                size="small"
            >
                {isMobile ? '강사' : '강사 선택'}
            </Button>
            <Dialog
                open={props.openLecturers}
                onClose={props.handleCloseLecturers}
            >
                <DialogTitle>강사 선택</DialogTitle>
                <List>
                    {props.lecturers &&
                        props.lecturers.map((c) => {
                            return (
                                <ListItem
                                    button
                                    onClick={() => {
                                        props.setUser(c.username);
                                        props.setCurrent(c.username);
                                        props.setOpenLecturers(false);
                                    }}
                                >
                                    <ListItemText primary={c.username} />
                                </ListItem>
                            );
                        })}
                </List>
            </Dialog>
        </>
    );
};

export default LecturersButton;
