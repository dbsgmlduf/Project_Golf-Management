import React, { useState } from 'react';
import {
    AccordionSummary,
    AccordionDetails,
    Accordion,
    Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import useStyles from './style';
import DeleteButton from '../main_delete';
const Main = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const userType = localStorage.getItem('userType');
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
                        {userType === 'lecturer' ? (
                            <Link
                                to={`/lecturer/info/${props.name}`}
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                }}
                            >
                                {props.name}
                            </Link>
                        ) : (
                            <Link
                                to={`/learner/info/${props.name}`}
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                }}
                            >
                                {props.name}
                            </Link>
                        )}
                    </Typography>
                    <DeleteButton />
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

export default Main;
