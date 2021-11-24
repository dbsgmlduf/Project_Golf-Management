import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './style';
import { Button, Grid, Paper, Avatar } from '@mui/material';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const Main = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={2}>
            <Paper elevation={10} className={classes.paper}>
                <Grid align="center">
                    <Avatar className={classes.avatar}>
                        <MenuBookIcon className={classes.icon} />
                    </Avatar>
                    <h2>SIGN UP</h2>
                </Grid>
                <Grid item>
                    <Button
                        size="large"
                        component={Link}
                        to="/register/lecturer"
                        className={classes.lecturerButton}
                        variant="contained"
                    >
                        강사
                    </Button>

                    <Button
                        size="large"
                        component={Link}
                        to="/register/learner"
                        className={classes.learnerButton}
                        variant="contained"
                    >
                        학생
                    </Button>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default Main;
