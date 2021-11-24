import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { DialogTitle, List, ListItem, ListItemText } from '@mui/material';
const LecturersButton = (props) => {
    return (
        <>
            <Button onClick={props.handleOpenLecturers} variant="contained">
                강사 선택
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
