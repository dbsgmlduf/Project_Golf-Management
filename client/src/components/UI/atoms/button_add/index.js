import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './style';

const AddButton = (props) => {
    const classes = useStyles();

    const userType = localStorage.getItem('userType');

    return userType === 'lecturer' ? (
        <Button
            variant="contained"
            component={Link}
            to="/lecturer/addlearner"
            startIcon={<AddIcon />}
            className={classes.addButton}
        >
            회원추가
        </Button>
    ) : (
        <Button
            variant="contained"
            component={Link}
            to="/learner/addlecturer"
            startIcon={<AddIcon />}
            className={classes.addButton}
        >
            강사추가
        </Button>
    );
};

export default AddButton;
