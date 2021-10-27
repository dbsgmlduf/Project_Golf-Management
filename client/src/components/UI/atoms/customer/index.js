import { TableCell, TableRow } from "@material-ui/core";
import React from "react";

const Customers =  (props) => {

    return(
        <TableRow>
            <TableCell align="center">{props.id}</TableCell>
            <TableCell align="center">{props.name}</TableCell>
            <TableCell align="center">{props.lastDate}</TableCell>
            <TableCell align="center">{props.nextDate}</TableCell>
        </TableRow>
    )
};

export default Customers;