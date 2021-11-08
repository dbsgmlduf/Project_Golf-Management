import { TableCell, TableRow } from "@material-ui/core";
import React from "react";
import DeleteStudy from "../info_delete";
import ModifyButton from "../button_modify"
const Info =  (props) => {

    return(
        <TableRow>
            <TableCell align="center">{props.topic}</TableCell>
            <TableCell align="center">{props.studyDate}</TableCell>
            <DeleteStudy/>
            <ModifyButton/>
        </TableRow>
    )
};

export default Info;