import { TableCell, TableRow } from "@material-ui/core";
import React from "react";
import Delete from '../delete_button';

const Customers =  (props) => {

    return(
        <TableRow>
            <TableCell align="center">{props.id}</TableCell>
            <TableCell align="center">{props.name}</TableCell>
            <TableCell align="center">{props.lastDate}</TableCell>
            <TableCell align="center">{props.nextDate}</TableCell>
            <Delete/>
        </TableRow>
    )
};

export default Customers;