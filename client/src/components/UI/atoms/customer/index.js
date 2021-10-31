import { TableCell, TableRow } from "@material-ui/core";
import React from "react";
import DeleteCustomer from "../delete_customer";
import CheckCustomer from "../check_customer";
const Customers =  (props) => {

    return(
        <TableRow>
            <TableCell align="center">{props.id}</TableCell>
            <TableCell align="center">{props.name}</TableCell>
            <TableCell align="center">{props.lastDate}</TableCell>
            <TableCell align="center">{props.nextDate}</TableCell>
            <DeleteCustomer/>
            <CheckCustomer/>
        </TableRow>
    )
};

export default Customers;