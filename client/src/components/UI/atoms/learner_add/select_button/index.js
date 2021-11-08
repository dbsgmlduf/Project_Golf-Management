import React from 'react';
import { Button } from '@material-ui/core';
import axios from 'axios';
import Swal from 'sweetalert2'

const SelectLecturer = (props) => {
    const openHandler = (e) => {
        e.preventDefault();
        let data = {
            agreement: 1,
            username: props.data,
        }
        axios.patch('api/instructors/agreement', data).then(response => {
            const isSuccess = response.data.result;
            if (isSuccess) {
                console.log(response.data.message);
                //성공
                Swal.fire({
                    icon: 'fail',
                    title: 'FAIL!',
                    text: '로그인에 실패하셨습니다. 다시 로그인해주세요!'
                });
            }
        }).catch(err => { console.log(err) })
    };
    return (
        <Button aria-label="select" onClick={openHandler} variant="contained" >
            회원추가
        </Button>
    )

};

export default SelectLecturer;