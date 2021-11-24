import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/system';
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
import Swal from 'sweetalert2';
import axios from 'axios';
import { DialogContent, DialogTitle } from '@material-ui/core';

const ModifyDialog = (props) => {
    //modify data
    const [theme, setTheme] = useState();
    const [contents, setContents] = useState();
    const [supplement, setSupplement] = useState();
    const [classDate, setClassDate] = useState(props.users[0].class_date);
    const [nextDate, setNextDate] = useState(props.users[0].next_class_date);
    //modify event handler
    const addTheme = (e) => {
        setTheme(e.currentTarget.value);
    };
    const addContents = (e) => {
        setContents(e.currentTarget.value);
    };
    const addSupplement = (e) => {
        setSupplement(e.currentTarget.value);
    };
    const addClassDate = (newDate) => {
        setClassDate(newDate);
    };
    const addNextDate = (newDate) => {
        setNextDate(newDate);
    };
    //modify save handler
    const handleSave = (e) => {
        e.preventDefault();
        props.closeHandler();
        let data = {
            lec_theme: theme,
            lec_contents: contents,
            supplement_items: supplement,
            class_date: classDate,
            next_class_date: nextDate,
        };
        axios
            .patch(`api/instructors//${props.username}`, data)
            .then((response) => {
                const isSuccess = response.data.updateSuccess;
                if (isSuccess) {
                    Swal.fire({
                        icon: 'success',
                        title: '성공!',
                        text: '내용이 수정되었습니다!',
                    }).then(() => {
                        window.location.replace(
                            `/lecturer/info/${props.username}`
                        );
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <Dialog fullScreen open={props.openModify} onClose={props.closeHandler}>
            <DialogTitle>
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={props.closeHandler}
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
            </DialogTitle>
            <DialogContent>
                <Box display="grid">
                    <TextField
                        label="강의주제"
                        placeholder="내용을 적어주세요...."
                        required
                        onChange={addTheme}
                        defaultValue={props.users[0].lec_theme}
                    />
                    <TextField
                        label="강의내용"
                        placeholder="내용을 적어주세요...."
                        rows={4}
                        fullWidth
                        required
                        multiline
                        onChange={addContents}
                        defaultValue={props.users[0].lec_contents}
                    />
                    <TextField
                        label="보충내용"
                        placeholder="내용을 적어주세요...."
                        rows={2}
                        fullWidth
                        required
                        multiline
                        onChange={addSupplement}
                        defaultValue={props.users[0].supplement_item}
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Stack spacing={3}>
                            <DesktopDatePicker
                                label="강의진행날짜"
                                value={classDate}
                                onChange={addClassDate}
                                renderInput={(params) => (
                                    <TextField {...params} />
                                )}
                            />
                            <DesktopDatePicker
                                label="다음강의날짜"
                                value={nextDate}
                                onChange={addNextDate}
                                renderInput={(params) => (
                                    <TextField {...params} />
                                )}
                            />
                        </Stack>
                    </LocalizationProvider>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default ModifyDialog;
