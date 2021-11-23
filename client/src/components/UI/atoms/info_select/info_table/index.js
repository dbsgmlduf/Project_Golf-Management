import React from 'react';
import { Divider, Grid } from '@mui/material';

import { Paper, Typography } from '@material-ui/core';

const Infotable = (props) => {
    console.log(props.users);
    return (
        <Grid>
            <Paper>
                {props.users.map((c) => {
                    return (
                        <>
                            <Typography
                                variant="h4"
                                component="div"
                                gutterBottom
                                align="center"
                            >
                                {c.session_no}주차 {props.username}
                            </Typography>
                            <Divider />
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
                            >
                                {c.lec_theme}
                            </Typography>
                            <Divider />
                            <Typography
                                variant="subtitle1"
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
                                align="center"
                            >
                                {c.lec_contents}
                            </Typography>
                            <Divider />
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
                                //align="inline-block"
                                align="center"
                            >
                                {c.supplement_item}
                            </Typography>
                            <Divider />
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
                            <Divider />
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
                        </>
                    );
                })}
            </Paper>
        </Grid>
    );
};

export default Infotable;
