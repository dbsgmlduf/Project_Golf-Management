import React from 'react';
import CreateIcon from '@material-ui/icons/Create';
import { Button } from '@material-ui/core';

const ModifyButton = () => {
    return(
        <Button aria-label="modify">
            <CreateIcon/>
        </Button>
    );
};

export default ModifyButton;