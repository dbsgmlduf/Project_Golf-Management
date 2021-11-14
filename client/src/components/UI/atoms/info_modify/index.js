import React, { useState } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import { Button } from '@material-ui/core';
import ModifyDialog from './modify_dialog';
import axios from 'axios';

const ModifyButton = (props) => {
    const [open, setOpen] = useState(false);

    const openHandler = (e) => {
        e.preventDefault();
        setOpen(true);
        const response = axios.get(axios.get(`/api/instructors/getinfo/${props.username}`));
        setUsers(response.data);//data가 없을 경우 예외처리 필요!!
    }

    const closeHandler = () => {
        setOpen(false);
    }
    //해당 학생의 해당 주차 세부 강의내용 data
    const [users, setUsers] = useState([]);

    return (
        <>
            <Button aria-label="modify" onClick={openHandler}>
                <CreateIcon />
            </Button>
            <ModifyDialog open={open} handleClose={closeHandler} data={users} />
        </>
    );
};

export default ModifyButton;