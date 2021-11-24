import React, { useState } from 'react';
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
import useStyles from './style';
import AddIcon from '@material-ui/icons/Add';
import { DialogTitle, DialogContent, TextField } from '@mui/material';
import axios from 'axios';

const AddStudy = (props) => {
    const classes = useStyles();
    //data state
    const [theme, setTheme] = useState();
    const [contents, setContents] = useState();
    const [supplement, setSupplement] = useState();
    const [classDate, setClassDate] = useState(new Date());
    const [nextDate, setNextDate] = useState(new Date());

    /*EVENT HANDLER*/

    const handleSave = () => {
        let data = {
            username: props.username,
            session_no: props.count + 1,
            lec_theme: theme,
            lec_contents: contents,
            supplement_items: supplement,
            class_date: classDate,
            next_class_date: nextDate,
        };
        axios
            .post('/api/instructors/classinfo', data)
            .then((response) => {
                const isSuccess = response.data.inputSuccess;
                if (isSuccess) {
                    props.setOpenStudy(false);
                    window.location.replace(`/lecturer/info/${props.username}`);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

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
    return (
        <div>
            <Button
                variant="contained"
                startIcon={<AddIcon />}
                className={classes.addButton}
                onClick={props.handleOpenStudy}
            >
                등록
            </Button>
            <Dialog
                fullScreen
                open={props.openStudy}
                onClose={props.handleCloseStudy}
            >
                <DialogTitle>
                    <AppBar sx={{ position: 'relative' }}>
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={props.handleCloseStudy}
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
                            <Button
                                autoFocus
                                color="inherit"
                                onClick={handleSave}
                            >
                                save
                            </Button>
                        </Toolbar>
                    </AppBar>
                </DialogTitle>
                <DialogContent>
                    <TextField
                        label="강의주제"
                        placeholder="내용을 적어주세요...."
                        required
                        onChange={addTheme}
                    />
                    <TextField
                        label="강의내용"
                        placeholder="내용을 적어주세요...."
                        rows={4}
                        fullWidth
                        required
                        multiline
                        onChange={addContents}
                    />
                    <TextField
                        label="보충내용"
                        placeholder="내용을 적어주세요...."
                        rows={2}
                        fullWidth
                        required
                        multiline
                        onChange={addSupplement}
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
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default AddStudy;
