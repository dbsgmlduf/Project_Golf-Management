import React from 'react';
import PageviewIcon from '@material-ui/icons/Pageview';
import { Button } from '@material-ui/core';

const CheckStudy = () =>{
    return(
        <Button aria-label="check study info">
            <PageviewIcon/>
        </Button>
    );
};

export default CheckStudy;