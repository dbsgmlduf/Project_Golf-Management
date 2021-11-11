import React, { useState } from 'react';
import axios from 'axios';
import Header from '../UI/modules/header/Header';
import { Grid, Paper, Avatar, TextField, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Step, Stepper, StepLabel } from '@material-ui/core';
import Swal from 'sweetalert2';
import useStyles from './style';
import MenuBookIcon from '@material-ui/icons/MenuBook'
import BackVideo from '../UI/atoms/background_video';

const RegisterPage = (props) => {

    const classes = useStyles();

    const [usertype, setUserTypeReg] = useState("");
    const [name, setUserNameReg] = useState("");
    const [email, setUserEmailReg] = useState("");
    const [id, setUserIdReg] = useState("");
    const [password, setUserPwReg] = useState("");
    const [confirmPassword, setUserConfirmPWReg] = useState("");

    /*Event Handler*/
    const usertypeHandler = (e) => {
        setUserTypeReg(e.currentTarget.value);
    }
    const nameHandler = (e) => {
        setUserNameReg(e.currentTarget.value);
    }
    const emailHandler = (e) => {
        setUserEmailReg(e.currentTarget.value);
    }
    const idHandler = (e) => {
        setUserIdReg(e.currentTarget.value);
    }
    const passwordHandler = (e) => {
        setUserPwReg(e.currentTarget.value);
    }
    const confirmPWHandler = (e) => {
        setUserConfirmPWReg(e.currentTarget.value);
    }

    const hasError = passwordEntered =>
        password.length < 5 ? true : false;

    const hasNotSameError = passwordEntered =>
        password !== confirmPassword ? true : false;

    const submitHandler = (e) => {

        e.preventDefault()
        if (password !== confirmPassword) {
            return alert("비밀번호가 일치하지 않습니다.")
        }
        let data = {
            usertype: usertype,
            username: name,
            email: email,
            id: id,
            password: password,
        }
        axios.post('api/users/register', data).then(response => {
            const isSuccess = response.data.registerSuccess;
            if (isSuccess) {
                //성공
                Swal.fire({
                    icon: 'success',
                    title: 'SUCCESS!',
                    text: '성공하셨습니다.'
                });
                props.history.push("/login");
            }
        }).catch(err => {
            console.log(err);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '회원가입에 실패하셧습니다.'
            })
        })



    }

    //Stepper
    const [activeStep, setActiveStep] = useState(0);
    const steps = ['스텝1', '스텝2'];

    const getStepContent = stepNumber => {
        switch (stepNumber) {
            case 0:
                return (
                    <FormControl className={classes.radio} required={true} >
                        <FormLabel>User Type</FormLabel>
                        <RadioGroup row aria-label="User Type" onChange={usertypeHandler}>
                            <FormControlLabel value="learner" control={<Radio />} label="learner" />
                            <FormControlLabel value="lecturer" control={<Radio />} label="lecturer" />
                        </RadioGroup>
                    </FormControl>
                );
            case 1:
                return (
                    <Grid>
                        <TextField label="Name" placeholder="Enter User Name" fullWidth required onChange={nameHandler} />
                        <TextField label="Email" placeholder="Enter Email" fullWidth required onChange={emailHandler} />
                        <TextField label="Id" placeholder="Enter Id" fullWidth required onChange={idHandler} />
                        <TextField label="Password(5글자 이상 필수)" type="password" placeholder="Enter Password" fullWidth required onChange={passwordHandler} error={hasError('password')} />
                        <TextField label="ConfirmPassword" type="password" placeholder="Enter ConfirmPassword" fullWidth required onChange={confirmPWHandler} error={hasNotSameError('confirmPassword')} helperText={
                            hasNotSameError('confirmPassword') ? "입력한 비밀번호와 일치하지 않습니다." : null} />
                    </Grid>
                );
            default:
                return '알수없는 스텝입니다.';
        }
    }
    const handleNext = () => {
        setActiveStep(preActiveStep => preActiveStep + 1);
    }
    const handleBack = () => {
        setActiveStep(preActiveStep => preActiveStep - 1);
    }
    const handleReset = () => {
        setActiveStep(0);
    }

    return (

        <Grid>
            <BackVideo />
            <Header />
            <Grid>
                <Paper elevation={10} className={classes.registerPaper}>
                    <Grid align="center">
                        <Avatar className={classes.avatar}><MenuBookIcon className={classes.icon} /></Avatar>
                        <h2>SIGN UP</h2>
                    </Grid>
                    <form onSubmit={submitHandler} noValidate>
                        <Stepper activeStep={activeStep}>
                            {steps.map(label => (
                                <Step key={label}>
                                    <StepLabel>
                                        {label}
                                    </StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <div>
                            {activeStep === steps.length ? (
                                <div>
                                    <div >모든 스텝을 완료하였습니다.</div>
                                    <div >
                                        <Button type="back" color='primary' style={{ marginRight: '10px' }} variant="contained" className={classes.button} onClick={handleReset}>처음으로</Button>
                                        <Button type="submit" color='primary' variant="contained" className={classes.button}>Sign</Button>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <Grid className={classes.contents}>
                                        {getStepContent(activeStep)}
                                    </Grid>
                                    <div className={classes.button}>
                                        <Button
                                            style={{ marginRight: '10px' }}
                                            variant="contained"
                                            color="primary"
                                            disabled={activeStep === 0}
                                            onClick={handleBack}>
                                            이전
                                        </Button>
                                        <Button variant="contained" color="primary" onClick={handleNext}>
                                            {activeStep === steps.length - 1 ? (
                                                '완료'
                                            ) : (
                                                '다음'
                                            )}
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </form>
                </Paper>
            </Grid>
        </Grid >
    )
};

export default RegisterPage;