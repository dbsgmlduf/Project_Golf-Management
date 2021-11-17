import React from 'react';
import { Button } from '@material-ui/core';
import Swal from 'sweetalert2';
import axios from 'axios';

const SelectLecturer = (props) => {
    //const [open,setOpen] = useState(false);
    const openHandler = (e) => {
        e.preventDefault();
        console.log(props.enrollData);
        console.log(props.enrollData.length);
        let data = {
            username: props.username,
        };
        Swal.fire({
            title: '강사를 선택하시겠습니까???',
            showCancelButton: true,
            confirmButtonText: '선택',
            confirmButtonColor: '#3085d6',
            cancelButtonText: '취소',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.isConfirmed) {
                //반복문 + 조건문 만약 enrollData[i].lecturer.id에 있는 값이 id와 일치하면
                for (let i = 0; i < props.enrollData.length; i++) {
                    if (props.id === props.enrollData[i].id) {
                        return Swal.fire({
                            icon: 'error',
                            title: 'FAIL!',
                            text: '현재 요청 중이거나 등록완료된 강사입니다!',
                        });
                    }
                }
                axios
                    .post('api/learners/enrollment', data)
                    .then((response) => {
                        const isSuccess = response.data.isSelected.isenrolled;
                        if (!isSuccess) {
                            //성공
                            Swal.fire({
                                icon: 'success',
                                title: 'SUCCESS!',
                                text: '성공하셨습니다.',
                            }).then(() => {
                                window.location.replace(`/learner`);
                            });
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                        Swal.fire({
                            icon: 'error',
                            title: 'FAIL!',
                            text: '등록요청에 실패하셨습니다!',
                        });
                    });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'FAIL!',
                    text: '등록을 취소하셨습니다!',
                });
            }
        });
    };
    for (let i = 0; i < props.enrollData.length; i++) {
        if (props.enrollData[i].id === props.id) {
            return (
                <Button aria-label="select" variant="contained">
                    대기중
                </Button>
            );
        }
    }
    return (
        <Button aria-label="select" onClick={openHandler} variant="contained">
            강사선택
        </Button>
    );
};

export default SelectLecturer;
