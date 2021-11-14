import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Stack from '@mui/material/Stack';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { TextField } from '@mui/material';
import axios from 'axios';

const ModifyDialog = (props) => {
    const handleSave = (e) => {
        e.preventDefault();
        props.handleClose();
        /*let data = {
            lec_theme: theme,
            lec_contents: contents,
            supplement_items: supplement,
            class_date: classDate,
            next_class_date: nextDate,
        }
        axios.patch('api/instructors/accept', data).then(response => {
            const isSuccess = response.data.result;
            if (isSuccess) {
                //성공
                Swal.fire({
                    icon: 'success',
                    title: '성공!',
                    text: '당신의 신규회원이 등록되었습니다!'
                }).then(()=>{
                    window.location.replace("/lecturer/addlearner")
                })
            }
        }).catch(err => { console.log(err) })
        */
    };

    return (
        <Dialog fullScreen open={props.open} onClose={props.handleClose}>
            <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={props.handleClose}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>

                    <Typography
                        sx={{ ml: 2, flex: 1 }}
                        variant="h6"
                        component="div"
                    >
                        강의내용등록
                    </Typography>
                    <Button autoFocus color="inherit" onClick={handleSave}>
                        save
                    </Button>
                </Toolbar>
            </AppBar>
            {/*<TextField label="강의주제" placeholder="내용을 적어주세요...." required onChange={addTheme} />
            <TextField label="강의내용" placeholder="내용을 적어주세요...." rows={4} fullWidth required multiline onChange={addContents} />
            <TextField label="보충내용" placeholder="내용을 적어주세요...." rows={2} fullWidth required multiline onChange={addSupplement} />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                    <DesktopDatePicker
                        label="강의진행날짜"
                        value={classDate}
                        onChange={addClassDate}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <DesktopDatePicker
                        label="다음강의날짜"
                        value={nextDate}
                        onChange={addNextDate}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Stack>
    </LocalizationProvider>*/}
        </Dialog>
    );
};

export default ModifyDialog;
