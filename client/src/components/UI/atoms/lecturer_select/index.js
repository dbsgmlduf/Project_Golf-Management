import React from 'react';
import { Button } from '@material-ui/core';
import Swal from 'sweetalert2';
import axios from 'axios';

const SelectLecturer = (props) => {
    //const [open,setOpen] = useState(false);
    const openHandler = (e) => {
        e.preventDefault();
        let data = {
            username: props.data,
        }
        Swal.fire({
            title: '강사를 선택하시겠습니까???',
            showCancelButton: true,
            confirmButtonText: '선택',
            confirmButtonColor: '#3085d6',
            cancelButtonText: '취소',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post('api/learners/enrollment', data).then(response => {
                    const isSuccess = response.data.inEnrolled;
                    if (!isSuccess) {
                        //성공
                        Swal.fire({
                            icon: 'success',
                            title: 'SUCCESS!',
                            text: '성공하셨습니다.'
                        });

                    }
                }).catch(err => { console.log(err) })
            }
            else {
                Swal.fire({
                    icon: 'fail',
                    title: 'FAIL!',
                    text: '로그인에 실패하셨습니다. 다시 로그인해주세요!'
                });
            }
        })
    };
    return (
        <Button aria-label="select" onClick={openHandler} variant="contained" >
            강사선택
        </Button>
    )

};

export default SelectLecturer;