import React from 'react';
import useStyles from './style';
import { Divider, Grid } from '@mui/material';
import { Paper, Typography } from '@material-ui/core';

const Infotable = (props) => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            {props.users.map((c) => {
                return (
                    <Grid wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Typography
                                variant="h4"
                                component="div"
                                gutterBottom
                                align="center"
                            >
                                {c.session_no}주차 {props.username}
                            </Typography>
                        </Grid>
                        <Divider />
                        <Grid item xs zeroMinWidth>
                            <Typography
                                variant="h4"
                                component="div"
                                gutterBottom
                                align="center"
                            >
                                주제
                            </Typography>
                            <Typography
                                variant="h6"
                                component="div"
                                gutterBottom
                                align="center"
                                style={{ overflowWrap: 'break-word' }}
                            >
                                {c.lec_theme}
                            </Typography>
                        </Grid>
                        <Divider />
                        <Grid item xs zeroMinWidth>
                            <Typography
                                variant="h4"
                                component={Typography}
                                gutterBottom
                                align="center"
                            >
                                강의내용
                            </Typography>
                            <Typography
                                variant="h6"
                                component="div"
                                gutterBottom
                                style={{ overflowWrap: 'break-word' }}
                            >
                                {c.lec_contents}
                            </Typography>
                        </Grid>
                        <Divider />
                        <Grid item xs zeroMinWidth>
                            <Typography
                                variant="h4"
                                component="div"
                                gutterBottom
                                align="center"
                            >
                                보충내용
                            </Typography>
                            <Typography
                                variant="string"
                                component="div"
                                gutterBottom
                                style={{ overflowWrap: 'break-word' }}
                            >
                                {c.supplement_item}
                            </Typography>
                        </Grid>
                        <Divider />
                        <Grid item xs zeroMinWidth>
                            <Typography
                                variant="h4"
                                component="div"
                                gutterBottom
                                align="center"
                            >
                                강의진행날짜
                            </Typography>
                            <Typography
                                variant="h6"
                                component="div"
                                gutterBottom
                                align="center"
                            >
                                {c.class_date}
                            </Typography>
                        </Grid>
                        <Divider />
                        <Grid item xs zeroMinWidth>
                            <Typography
                                variant="h4"
                                component="div"
                                gutterBottom
                                align="center"
                            >
                                다음강의진행날짜
                            </Typography>
                            <Typography
                                variant="h6"
                                component="div"
                                gutterBottom
                                align="center"
                            >
                                {c.next_class_date}
                            </Typography>
                        </Grid>
                    </Grid>
                );
            })}
        </Paper>
    );
};

export default Infotable;
