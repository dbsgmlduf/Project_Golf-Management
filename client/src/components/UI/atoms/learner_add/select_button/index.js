import React from 'react';
import { Button } from '@material-ui/core';
import axios from 'axios';
import SuccessAlert from '../../alert_success';

const SelectLecturer = (props) => {
    const openHandler = (e) => {
        e.preventDefault();
        let data = {
            inEnrolled : 1,
        }
        axios.patch('api/instructors/agreement', data).then(response => {
            const isSuccess = response.data.inEnrolled;
            if (!isSuccess) {
                console.log(response.data.mes);
                //성공
                <SuccessAlert />
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