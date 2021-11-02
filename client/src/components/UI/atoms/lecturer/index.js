import {TableCell, TableRow } from "@material-ui/core";
import React from "react";
import SelectLecturer from "../lecturer_select";
const Lecturers =  (props) => {

    return(
        <TableRow>
            <TableCell align="center">{props.id}</TableCell>
            <TableCell align="center">{props.name}</TableCell>
            <TableCell align="center">{props.lecturerType}</TableCell>
            <SelectLecturer/>
        </TableRow>
    )
};

export default Lecturers;