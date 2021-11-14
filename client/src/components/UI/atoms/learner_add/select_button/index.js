import React from 'react';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const SelectLecturer = (props) => {
    const openHandler = (e) => {
        e.preventDefault();
        let data = {
            agreement: 1,
            username: props.data,
        };
        axios
            .patch('api/instructors/accept', data)
            .then((response) => {
                const isSuccess = response.data.result;
                if (isSuccess) {
                    //성공
                    Swal.fire({
                        icon: 'success',
                        title: '성공!',
                        text: '당신의 신규회원이 등록되었습니다!',
                    }).then(() => {
                        window.location.replace('/lecturer/addlearner');
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <Button aria-label="select" onClick={openHandler} variant="contained">
            회원추가
        </Button>
    );
};

export default withRouter(SelectLecturer);
