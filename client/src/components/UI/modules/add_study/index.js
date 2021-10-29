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
import { TextField } from '@mui/material';

const AddStudy = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [theme, setTheme] = useState();
    const [contents, setContents] = useState();
    const [classDate, setClassDate] = useState(new Date());
    const [nextDate, setNextDate] = useState(new Date());

    /*EVENT HANDLER*/
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const addTheme = (e) => {
        setTheme(e.currentTarget.value);
        console.log(e.currentTarget.value);
    };
    const addContents = (e) => {
        setContents(e.currentTarget.value);
        console.log(e.currentTarget.value);
    };
    const addClassDate = (newDate) => {
        setClassDate(newDate);
    };
    const addNextDate = (newDate) => {
        setNextDate(newDate);
    };
    return (
        <div>
            <Button variant="contained" startIcon={<AddIcon />} className={classes.addButton} onClick={handleClickOpen}>
                등록
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            강의내용등록
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            save
                        </Button>
                    </Toolbar>
                </AppBar>
                <TextField label="theme" placeholder="내용을 적어주세요...."  required onChange={addTheme} />
                <TextField label="contents" placeholder="내용을 적어주세요...." rows={4} fullWidth required multiline onChange={addContents} />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Stack spacing={3}>
                            <DesktopDatePicker
                                label="Start Time"
                                value={classDate}
                                onChange={addClassDate}
                                renderInput={(params) => <TextField {...params} />}
                            />
                            <DesktopDatePicker
                                label="End Time"
                                value={nextDate}
                                onChange={addNextDate}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Stack>
                    </LocalizationProvider>
            </Dialog>
        </div>
    );
};

export default AddStudy;