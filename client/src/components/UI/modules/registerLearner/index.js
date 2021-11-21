import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Paper, Button } from '@material-ui/core';
import useStyles from './style';
import RegisterInfo from '../../atoms/register_info';

const Main = (props) => {
    const classes = useStyles();

    const [name, setUserNameReg] = useState(null);
    const [email, setUserEmailReg] = useState(null);
    const [id, setUserIdReg] = useState(null);
    const [password, setUserPwReg] = useState(null);
    const [confirmPassword, setUserConfirmPWReg] = useState(null);
    /*Event Handler*/
    const nameHandler = (e) => {
        setUserNameReg(e.currentTarget.value);
    };
    const emailHandler = (e) => {
        setUserEmailReg(e.currentTarget.value);
    };
    const idHandler = (e) => {
        setUserIdReg(e.currentTarget.value);
    };
    const passwordHandler = (e) => {
        setUserPwReg(e.currentTarget.value);
    };
    const confirmPWHandler = (e) => {
        setUserConfirmPWReg(e.currentTarget.value);
    };
    const checkEmail = (asValue) => {
        var regExp =
            /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
    };

    const hasError = (passwordEntered) => {
        var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/; //  8 ~ 10자 영문, 숫자 조합
        return regExp.test(password); // 형식에 맞는 경우 true 리턴
    };
    console.log(hasError());
    const hasNotSameError = (passwordEntered) =>
        password && password !== confirmPassword ? true : false;
    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword && checkEmail && hasError) {
            return alert('비밀번호가 일치하지 않습니다.');
        }
        let data = {
            usertype: 'learner',
            username: name,
            email: email,
            id: id,
            password: password,
        };
        axios
            .post('api/users/register', data)
            .then((response) => {
                const isSuccess = response.data.registerSuccess;
                if (isSuccess) {
                    //성공
                    Swal.fire({
                        icon: 'success',
                        title: 'SUCCESS!',
                        text: '성공하셨습니다.',
                    }).then(props.history.push('/login'));
                }
            })
            .catch((err) => {
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: '회원가입에 실패하셧습니다.',
                });
            });
    };
    console.log(name);
    return (
        <form onSubmit={submitHandler}>
            <Paper elevation={10} className={classes.registerPaper}>
                <RegisterInfo
                    nameHandler={nameHandler}
                    emailHandler={emailHandler}
                    idHandler={idHandler}
                    email={email}
                    password={password}
                    confirmPassword={confirmPassword}
                    passwordHandler={passwordHandler}
                    checkEmail={checkEmail}
                    hasError={hasError}
                    confirmPWHandler={confirmPWHandler}
                    hasNotSameError={hasNotSameError}
                />
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    fullWidth
                    className={classes.signinButton}
                >
                    Sign
                </Button>
            </Paper>
        </form>
    );
};

export default withRouter(Main);
