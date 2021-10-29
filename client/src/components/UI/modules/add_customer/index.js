import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, TextField, Button, DialogActions } from "@material-ui/core";
import Stack from '@mui/material/Stack';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AddIcon from '@material-ui/icons/Add';
import useStyles from "./style";

const AddCustomer = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [name, setName] = useState();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    
    /*EventHandler*/
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setName("");
    };
    const changeName = (e) =>{
        setName(e.currentTarget.value);
    };
    const changeStartDate = (newValue) => {
        setStartDate(newValue);
    };
    const changeEndtDate = (newValue) => {
        setEndDate(newValue);
    };
    //추가 EnentHandler 필요
    return (
        <div>
            <Button variant="contained" startIcon={<AddIcon />} className={classes.addButton} onClick={handleOpen}>
                등록
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>고객추가</DialogTitle>
                <DialogContent>
                    <TextField label="이름" placeholder="User Name" fullWidth required onChange={changeName} />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Stack spacing={3}>
                            <DesktopDatePicker
                                label="Start Time"
                                value={startDate}
                                onChange={changeStartDate}
                                renderInput={(params) => <TextField {...params} />}
                            />
                            <DesktopDatePicker
                                label="End Time"
                                value={endDate}
                                onChange={changeEndtDate}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Stack>
                    </LocalizationProvider>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary">추가</Button>
                    <Button variant="contained" color="primary" onClick={handleClose}>닫기</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default AddCustomer