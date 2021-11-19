import { TableCell, TableRow } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';
import DeleteButton from '../main_delete';
const Main = (props) => {
    const userType = localStorage.getItem('userType');

    return userType === 'lecturer' ? (
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
                <DeleteButton />
            </TableCell>
        </TableRow>
    ) : (
        <TableRow>
            <TableCell align="center">
                <Link
                    to={`/learner/info/${props.name}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    {props.name}
                </Link>
            </TableCell>
            <TableCell align="center">
                <DeleteButton />
            </TableCell>
        </TableRow>
    );
};

export default Main;
