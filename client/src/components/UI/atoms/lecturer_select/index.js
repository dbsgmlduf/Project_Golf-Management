import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import Swal from 'sweetalert2';
import axios from 'axios';
import SuccessAlert from '../success_alert';
const SelectLecturer = (props) => {
    //const [open,setOpen] = useState(false);
    const openHandler = () => {
        console.log(props.data);
        Swal.fire({
            title: '강사를 선택하시겠습니까???',
            showCancelButton: true,
            confirmButtonText: '선택',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: '취소'
        }).then(() => {
            axios.post('api/learners/enrollment', props.data).then(response => {
                const isSuccess = response.data.inEnrolled;
                if (isSuccess) {
                    console.log(response.data.mes);
                    //성공
                    <SuccessAlert/>
                }
            }).catch(err => { console.log(err) })
        })
    };
    return (
        <Button aria-label="select" onClick={openHandler} variant="contained" >
            강사선택
        </Button>
    )

};

export default SelectLecturer;