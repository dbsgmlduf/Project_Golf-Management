import React from 'react';
import CreateIcon from '@material-ui/icons/Create';
import { Button } from '@material-ui/core';
import ModifyDialog from './modify_dialog';

const ModifyButton = (props) => {
    //해당 학생의 해당 주차 세부 강의내용 data
    //수정dialog open관련

    return (
        <>
            <Button aria-label="modify" onClick={props.openHandler}>
                <CreateIcon />
            </Button>
            <ModifyDialog
                openModify={props.openModify}
                closeHandler={props.closeHandler}
                username={props.username}
                session_no={props.session_no}
                users={props.users}
            />
        </>
    );
};

export default ModifyButton;
