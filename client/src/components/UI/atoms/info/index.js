import { TableCell, TableRow } from '@material-ui/core';
import React from 'react';
import ModifyButton from '../info_modify';
import SelectInfo from '../info_select';
const Info = (props) => {
    return (
        <TableRow>
            <TableCell align="center">{props.session_no}</TableCell>
            <TableCell align="center">{props.topic}</TableCell>
            <TableCell align="center">{props.studyDate}</TableCell>
            <TableCell align="center">
                <ModifyButton
                    username={props.username}
                    session_no={props.session_no}
                />
            </TableCell>
            <TableCell align="center">
                <SelectInfo
                    username={props.username}
                    session_no={props.session_no}
                />
            </TableCell>
        </TableRow>
    );
};

export default Info;
