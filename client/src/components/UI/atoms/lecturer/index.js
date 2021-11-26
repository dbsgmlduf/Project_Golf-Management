import React, { useState } from 'react';
import {
    AccordionSummary,
    AccordionDetails,
    Accordion,
    Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './style';
import SelectLecturer from '../lecturer_select';
const Lecturers = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
            <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography
                        sx={{ width: '100%', flexShrink: 1 }}
                        className={classes.username}
                    >
                        {props.username}
                    </Typography>

                    <SelectLecturer
                        username={props.username}
                        id={props.id}
                        enrollData={props.enrollData}
                    />
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam
                        mattis feugiat. Aliquam eget maximus est, id dignissim
                        quam.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    );
};

export default Lecturers;
