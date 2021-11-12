import { TableCell, TableRow } from "@material-ui/core";
import React from "react";
import DeleteStudy from "../info_delete";
import ModifyButton from "../button_modify"
import SelectInfo from "../info_select";
const Info =  (props) => {
    return(
        <TableRow>
            <TableCell align="center">{props.topic}</TableCell>
            <TableCell align="center">{props.studyDate}</TableCell>
            <DeleteStudy/>
            <ModifyButton/>
            <SelectInfo username={props.username} count={props.count}/>
        </TableRow>
    )
};

export default Info;