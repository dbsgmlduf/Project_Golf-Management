import { TableCell, TableRow } from '@material-ui/core';
import React from 'react';
import SelectLecturer from '../lecturer_select';
const Lecturers = (props) => {
    return (
        <TableRow>
            <TableCell align="center">{props.username}</TableCell>
            <TableCell align="center">
                <SelectLecturer
                    username={props.username}
                    id={props.id}
                    enrollData={props.enrollData}
                />
            </TableCell>
        </TableRow>
    );
};

export default Lecturers;
