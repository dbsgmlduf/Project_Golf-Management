import { TableCell, TableRow } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';
import DeleteLearner from '../learner_delete';
const Learners = (props) => {
    return (
        <TableRow>
            <TableCell align="center">
                <Link
                    to={`/lecturer/info/${props.name}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    {props.name}
                </Link>
            </TableCell>
            <TableCell align="center">
                <DeleteLearner />
            </TableCell>
        </TableRow>
    );
};

export default Learners;
