import { TableCell, TableRow } from "@material-ui/core";
import React from "react";
import Delete from '../button_delete';

const Info =  (props) => {

    return(
        <TableRow>
            <TableCell align="center">{props.num}</TableCell>
            <TableCell align="center">{props.studyDate}</TableCell>
            <TableCell align="center">{props.topic}</TableCell>
            <Delete/>
        </TableRow>
    )
};

export default Info;