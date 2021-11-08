import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { loginUser } from '../../_actions/user_actions';
import Header from '../UI/modules/header/Header';
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core';
import useStyles from './style';
import LockIcon from '@material-ui/icons/Lock'
import Swal from 'sweetalert2';
import BackVideo from '../UI/atoms/background_video';

const LoginPage = (props) => {
    const dispatch = useDispatch();
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
        /*axios.post('/api/users/login', data).then(response => {
            localStorage.setItem('accessToken', response.data.accessToken)
            console.log(localStorage.getItem('accessToken'))
            const userTypeRes = response.data.userType['usertype'];
            if (userTypeRes === 'lecturer') {
                props.history.push('/lecturer')
            } else if (userTypeRes === false) {
                props.history.push('/learner')
            }

        })
            .catch(err => {
                console.log(err);
            })*/

        axios.interceptors.request.use((co) => {
            co.headers = {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            };
            co.timeout = 2000;
            return co;
        })

        dispatch(loginUser(data)).then(response => {
            if (response.payload.loginSuccess) {
                localStorage.setItem('accessToken', response.payload.accessToken);
                const userTypeRes = response.payload.userType['usertype'];
                localStorage.setItem('userType', userTypeRes);
                Swal.fire({
                    icon: 'success',
                    title: 'SUCCESS!',
                    text: '성공하셨습니다.'
                }).then(()=>{
                    if (userTypeRes === 'lecturer') {
                        props.history.push('/lecturer')
                    } else if (userTypeRes === 'learner') {
                        props.history.push('/learner')
                    }
                })
                
            }
            else {
                Swal.fire({
                    icon: 'fail',
                    title: 'FAIL!',
                    text: '로그인에 실패하셨습니다. 다시 로그인해주세요!'
                });
            }
        })
    }

    return (

        <Grid spacing={1}>
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