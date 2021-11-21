import React, { useState } from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import SelectInfo from '../info_select';
const Info = (props) => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    return (
        <>
            <TableRow onClick={handleClickOpen} hover>
                <TableCell align="center">{props.session_no}</TableCell>
                <TableCell align="center">{props.topic}</TableCell>
                <TableCell align="center">{props.studyDate}</TableCell>
            </TableRow>
            <SelectInfo
                open={open}
                setOpen={setOpen}
                handleClickOpen={handleClickOpen}
                username={props.username}
                session_no={props.session_no}
                myName={props.myName}
                user={props.user}
            />
        </>
    );
};

export default Info;
