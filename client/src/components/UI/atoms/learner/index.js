import { TableCell, TableRow } from "@material-ui/core";
import { Link } from 'react-router-dom';
import React from "react";
import DeleteLearner from "../learner_delete";
const Learners = (props) => {

    return (
        <TableRow>
            <TableCell align="center">{props.id}</TableCell>
            <TableCell align="center"><Link to={`/lecturer/info/${props.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>{props.name}</Link></TableCell>
            <TableCell align="center">{props.studyDate}</TableCell>
            <TableCell align="center">{props.nextDate}</TableCell>
            <DeleteLearner />
        </TableRow>
    )
};

export default Learners;