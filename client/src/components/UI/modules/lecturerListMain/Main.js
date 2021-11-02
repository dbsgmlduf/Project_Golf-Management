import { Card } from "@material-ui/core";
import React,{useState} from "react";
import useStyles from "./style";
import CustomersList from "../../atoms/customer_list";

const Main = () => {
    const classes = useStyles();
    
    return (
        <Card className={classes.lecturerCard}>
            <CustomersList />
        </Card>
    );
}

export default Main;