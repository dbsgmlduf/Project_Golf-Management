import BasicTable from "../../atoms/lecturer_table";
import { Card, Grid, Paper } from "@material-ui/core";
import useStyles from "./style";

const Main = () => {
    const classes = useStyles();
    return (
        <Card className={classes.lecturerCard}>
            <BasicTable />
        </Card>
    );
}

export default Main;