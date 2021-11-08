import { Card } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import LearnerList from "../../atoms/learner_list";

const Main = () => {
    const classes = useStyles();

    return (
        <Card className={classes.lecturerCard}>
            <LearnerList />
        </Card>
    );
}

export default Main;