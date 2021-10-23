import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../_actions/user_actions'
import Header from '../layout/Header'
import { Grid, Paper, Avatar, TextField, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import useStyles from './style';
import MenuBookIcon from '@material-ui/icons/MenuBook'
const RegisterPage = (props) => {

    const dispatch = useDispatch();
    const [usertype, setUserTypeReg] = useState("");
    const [email, setUserEmailReg] = useState("");
    const [id, setUserIdReg] = useState("");
    const [password, setUserPwReg] = useState("");
    const [confirmPassword, setUserConfirmPWReg] = useState("");
    const [nickname, setUserNicknameReg] = useState("");
    const [confirmauth, setUserConfirmAuthReg] = useState("");

    const classes = useStyles();

    /*Event Handler*/
    const usertypeHandler = (e) => {
        console.log('ff' + e.currentTarget.value);
        setUserTypeReg(e.currentTarget.value);
    }
    const emailHandler = (e) => {
        console.log(e.currentTarget.value);
        setUserEmailReg(e.currentTarget.value);
    }
    const idHandler = (e) => {
        console.log(e.currentTarget.value);
        setUserIdReg(e.currentTarget.value);
    }
    const passwordHandler = (e) => {
        console.log(e.currentTarget.value);
        setUserPwReg(e.currentTarget.value);
    }
    const confirmPWHandler = (e) => {
        console.log(e.currentTarget.value);
        setUserConfirmPWReg(e.currentTarget.value);
    }
    const nicknameHandler = (e) => {
        console.log(e.currentTarget.value);
        setUserNicknameReg(e.currentTarget.value);
    }
    const confirmAuthHandler = (e) => {
        console.log(e.currentTarget.value);
        setUserConfirmAuthReg(e.currentTarget.value);
    }
    const submitHandler = (e) => {

        e.preventDefault()

        const data = {
            usertype: usertype,
            email: email,
            id: id,
            password: password,
            nickname: nickname,
            confirmauth: confirmauth,
        }
        if (password === confirmPassword) {
            dispatch(register(data)).then(res => {
                console.log(res);
                alert("가입이 정상적으로 완료되었습니다");
                props.history.push("/login");
            })
        } else {
            alert("비밀번호가 일치하지 않습니다.")
        }
    }

    return (

        <Grid>
            <Header />
            <Paper elevation={10} className={classes.registerPaper} >
                <Grid align="center">
                    <Avatar className={classes.avatar}><MenuBookIcon className={classes.icon} /></Avatar>
                    <h2>SIGN UP</h2>
                </Grid>
                <form onSubmit={submitHandler}>
                    <FormControl className={classes.radio} >
                        <FormLabel>User Type</FormLabel>
                        <RadioGroup row aria-label="User Type" onChange={usertypeHandler}>
                            <FormControlLabel value="learner" control={<Radio />} label="learner" />
                            <FormControlLabel value="lecturer" control={<Radio />} label="lecturer" />
                        </RadioGroup>
                    </FormControl>
                    <TextField label="Email" placeholder="Enter Email" fullWidth required onChange={emailHandler} />
                    <TextField label="User Id" placeholder="Enter User Id" fullWidth required onChange={idHandler} />
                    <TextField label="Password" type="password" placeholder="Enter Password" fullWidth required onChange={passwordHandler} />
                    <TextField label="ConfirmPassword" type="password" placeholder="Enter ConfirmPassword" fullWidth required onChange={confirmPWHandler} />
                    <TextField label="nickname" placeholder="NickName" fullWidth required onChange={nicknameHandler} />
                    <FormControl className={classes.radio} >
                        <FormLabel>Certification</FormLabel>
                        <RadioGroup row aria-label="certification" onChange={confirmAuthHandler}>
                            <FormControlLabel value={1} control={<Radio />} label="1" />
                            <FormControlLabel value={2} control={<Radio />} label="2" />
                            <FormControlLabel value={3} control={<Radio />} label="3" />
                        </RadioGroup>
                    </FormControl>
                    <Button type="submit" color='primary' variant="contained" fullWidth className={classes.signinButton}>Sign</Button>
                </form>
            </Paper>
        </Grid>
    )
};

export default RegisterPage;