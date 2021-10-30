import { TableCell, TableRow } from "@material-ui/core";
import React from "react";
import CheckStudy from "../check_study";
import DeleteStudy from "../delete_study";
import ModifyButton from "../button_modify"
const Info =  (props) => {

    return(
        <TableRow>
            <TableCell align="center">{props.num}</TableCell>
            <TableCell align="center">{props.studyDate}</TableCell>
            <TableCell align="center">{props.topic}</TableCell>
            <DeleteStudy/>
            <CheckStudy/>
            <ModifyButton/>
        </TableRow>
    )
};

export default Info;