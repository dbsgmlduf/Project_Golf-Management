import { TableCell, TableRow } from '@material-ui/core';
import React from 'react';
import SelectLearner from '../select_button';
const AddTable = (props) => {
    return (
        <TableRow>
            <TableCell align="center">{props.username}</TableCell>
            <TableCell align="center">
                <SelectLearner data={props.data} />
            </TableCell>
        </TableRow>
    );
};

export default AddTable;
