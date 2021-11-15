import { TableCell, TableRow } from '@material-ui/core';
import React from 'react';
import SelectLecturer from '../lecturer_select';
const Lecturers = (props) => {
    const enrollData = props.enrollData;
    console.log(props.id);
    return (
        <TableRow>
            <TableCell align="center">{props.username}</TableCell>
            <TableCell align="center"></TableCell>
        </TableRow>
    );
};

export default Lecturers;
