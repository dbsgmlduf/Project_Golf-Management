import React, { useState } from 'react';
import axios from 'axios';
import Header from '../UI/modules/header/Header';
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core';
import useStyles from './style';
import LockIcon from '@material-ui/icons/Lock'
import Swal from 'sweetalert2';
import BackVideo from '../UI/atoms/background_video';

const LoginPage = (props) => {
    const [id, setUserId] = useState("");
    const [password, setUserPw] = useState("");

    const classes = useStyles();

    /*EventHandler*/
    const onIdHandler = (e) => {
        setUserId(e.currentTarget.value);
    }
    const onPasswordHandler = (e) => {
        setUserPw(e.currentTarget.value);
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log('id', id);
        console.log('Password', password);
        let data = {
            id: id,
            password: password,
        }
        axios.post('/api/users/login', data).then(response => {
            const isSuccess = response.data.loginSuccess;
            //추후에 서버측에서 오류메세지 오면 성공여부에따른 알림 출력을 위해
            //만약 isSuccess가 false이면 그에 맞는 서버 측에서의 중복여부 오류문자 수신후 출력 예정
            if (isSuccess) {
                localStorage.setItem('accessToken', response.data.accessToken);
                const userTypeRes = response.data.userType;
                localStorage.setItem('userType', userTypeRes);
                Swal.fire({
                    icon: 'success',
                    title: 'SUCCESS!',
                    text: '성공하셨습니다.'
                }).then(() => {
                    if (userTypeRes === 'lecturer') {
                        props.history.push('/lecturer')
                    } else if (userTypeRes === 'learner') {
                        props.history.push('/learner')
                    }
                })
            }
        }).catch(err => {
            console.log(err);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '로그인에 실패하셧습니다.'
            })
        })
    }


    return (

        <Grid>
            <BackVideo />
            <Header />
            <form onSubmit={onSubmitHandler}>
                <Paper elevation={10} className={classes.paper}>
                    <Grid align="center">
                        <Avatar className={classes.avatar}><LockIcon className={classes.icon} /></Avatar>
                        <h2>SIGN IN</h2>
                    </Grid>
                    <TextField label="Username" placeholder="Enter Username" fullWidth required onChange={onIdHandler} />
                    <TextField label="Password" type="password" placeholder="Enter Password" fullWidth required className={classes.password} onChange={onPasswordHandler} />
                    <Button type="submit" color='primary' variant="contained" fullWidth className={classes.button}>SIGN IN</Button>
                </Paper>
            </form>
        </Grid>
    );
}

export default LoginPage;