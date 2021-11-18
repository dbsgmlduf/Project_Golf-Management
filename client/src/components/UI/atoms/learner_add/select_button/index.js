import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import DateDialog from './select_dialog';

const SelectLecturer = (props) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button
                aria-label="select"
                onClick={handleOpen}
                variant="contained"
            >
                회원추가
            </Button>
            <DateDialog
                username={props.username}
                handleClose={handleClose}
                open={open}
            />
        </>
    );
};

export default withRouter(SelectLecturer);
