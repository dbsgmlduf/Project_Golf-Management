import BasicTable from "../../atoms/lecturer_table";
import { Card, Grid, Paper } from "@material-ui/core";
import useStyles from "./style";
import SearchBar from "../../atoms/seachBar";

const Main = () => {
    const classes = useStyles();
    return (
        <Card className={classes.lecturerCard}>
            <SearchBar/>
            <BasicTable />
        </Card>
    );
}

export default Main;