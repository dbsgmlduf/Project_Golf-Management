import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { DialogTitle, List, ListItem, ListItemText } from '@mui/material';
const LecturersButton = (props) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Button onClick={handleOpen} variant="contained">
                강사 선택
            </Button>
            <Dialog open={open} onClose={handleClose}>
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
                                        setOpen(false);
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
