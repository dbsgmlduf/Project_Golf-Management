import {TableCell, TableRow } from "@material-ui/core";
import React from "react";
import SelectLecturer from "../lecturer_select";
const Lecturers =  (props) => {

    return(
        <TableRow>
            <TableCell align="center">{props.username}</TableCell>
            <SelectLecturer data={props.data}/>
        </TableRow>
    )
};

export default Lecturers;