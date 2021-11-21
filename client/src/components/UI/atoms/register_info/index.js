import React from 'react';
import { Grid, Avatar, TextField } from '@material-ui/core';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import useStyles from './style';
const RegisterInfo = (props) => {
    const classes = useStyles();
    return (
        <>
            <Grid align="center">
                <Avatar className={classes.avatar}>
                    <MenuBookIcon className={classes.icon} />
                </Avatar>
                <h2>SIGN UP</h2>
            </Grid>

            <TextField
                label="Name"
                placeholder="Enter User Name"
                fullWidth
                required
                onChange={props.nameHandler}
            />
            <TextField
                label="Email"
                placeholder="Enter Email"
                fullWidth
                required
                onChange={props.emailHandler}
            />
            <TextField
                label="Id"
                placeholder="Enter Id"
                fullWidth
                required
                onChange={props.idHandler}
            />
            <TextField
                label="Password(5글자 이상 필수)"
                type="password"
                placeholder="Enter Password"
                fullWidth
                required
                onChange={props.passwordHandler}
                error={props.hasError('password')}
            />
            <TextField
                label="ConfirmPassword"
                type="password"
                placeholder="Enter ConfirmPassword"
                fullWidth
                required
                onChange={props.confirmPWHandler}
                error={props.hasNotSameError('confirmPassword')}
                helperText={
                    props.hasNotSameError('confirmPassword')
                        ? '입력한 비밀번호와 일치하지 않습니다.'
                        : null
                }
            />
        </>
    );
};

export default RegisterInfo;
