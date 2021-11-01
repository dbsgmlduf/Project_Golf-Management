import { Card } from "@material-ui/core";
import useStyles from "./style";
import SearchBar from "../../atoms/customer_seach";
import CustomersList from "../../atoms/customer_list";

const Main = () => {
    const classes = useStyles();
    return (
        <Card className={classes.lecturerCard}>
            <SearchBar />
            <CustomersList />
        </Card>
    );
}

export default Main;