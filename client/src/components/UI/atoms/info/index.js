import { TableCell, TableRow } from "@material-ui/core";
import React from "react";
import DeleteStudy from "../info_delete";
import ModifyButton from "../info_modify"
import SelectInfo from "../info_select";
const Info = (props) => {
    return (
        <TableRow>
            <TableCell align="center">{props.topic}</TableCell>
            <TableCell align="center">{props.studyDate}</TableCell>
            <TableCell align="center"><ModifyButton username={props.username} count={props.count} /><DeleteStudy username={props.username} /></TableCell>
            <TableCell align="center"><SelectInfo username={props.username} count={props.count} /></TableCell>
        </TableRow>
    )
};

export default Info;