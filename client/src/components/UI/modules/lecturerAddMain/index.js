import { Card } from "@mui/material";
import React from "react";
import AddLearner from "../../atoms/learner_add";
import useStyles from "./style";

const Main = () => {
    const classes = useStyles();
    return(
        <Card className={classes.lecturerCard} elevation={10}>
            <AddLearner/>
        </Card>
    )
};

export default Main;