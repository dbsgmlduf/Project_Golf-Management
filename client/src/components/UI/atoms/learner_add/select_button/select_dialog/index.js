import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from '@material-ui/core';
import Stack from '@mui/material/Stack';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

const DateDialog = (props) => {
    const [classDate, setClassDate] = useState(new Date());
    const [nextDate, setNextDate] = useState(new Date());

    const addClassDate = (newDate) => {
        setClassDate(newDate);
    };
    const addNextDate = (newDate) => {
        setNextDate(newDate);
    };

    const subscribeHandle = (e) => {
        e.preventDefault();
        props.handleClose();
        let data = {
            agreement: 1,
            username: props.username,
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
        <>
            <Dialog open={props.open} onClose={props.handleClose}>
                <DialogTitle>Date Input</DialogTitle>
                <DialogContent>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Stack spacing={3}>
                            <DesktopDatePicker
                                label="강의시작날짜"
                                value={classDate}
                                onChange={addClassDate}
                                renderInput={(params) => (
                                    <TextField {...params} />
                                )}
                            />
                            <DesktopDatePicker
                                label="마지막강의날짜"
                                value={nextDate}
                                onChange={addNextDate}
                                renderInput={(params) => (
                                    <TextField {...params} />
                                )}
                            />
                        </Stack>
                    </LocalizationProvider>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose}>Cancel</Button>
                    <Button onClick={subscribeHandle}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default DateDialog;
