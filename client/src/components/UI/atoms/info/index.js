import { TableCell, TableRow } from "@material-ui/core";
import React from "react";
import DeleteStudy from "../delete_study";

const Info =  (props) => {

    return(
        <TableRow>
            <TableCell align="center">{props.num}</TableCell>
            <TableCell align="center">{props.studyDate}</TableCell>
            <TableCell align="center">{props.topic}</TableCell>
            <DeleteStudy/>
        </TableRow>
    )
};

export default Info;