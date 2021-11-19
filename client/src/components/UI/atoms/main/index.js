import { TableCell, TableRow } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';
import DeleteButton from '../main_delete';
const Main = (props) => {
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
                <DeleteButton />
            </TableCell>
        </TableRow>
    );
};

export default Main;
