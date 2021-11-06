import { TableCell, TableRow } from "@material-ui/core";
import { Link } from 'react-router-dom';
import React from "react";
import DeleteCustomer from "../customer_delete";
const Customers = (props) => {

    return (
        <TableRow>
            <TableCell align="center">{props.id}</TableCell>
            <TableCell align="center"><Link to={`/lecturer/info/${props.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>{props.name}</Link></TableCell>
            <TableCell align="center">{props.studyDate}</TableCell>
            <TableCell align="center">{props.nextDate}</TableCell>
            <DeleteCustomer />
        </TableRow>
    )
};

export default Customers;