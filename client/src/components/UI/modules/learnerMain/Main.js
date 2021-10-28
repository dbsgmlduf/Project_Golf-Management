import { Card } from "@material-ui/core";
import UserProfile from "../../atoms/customer_profile";
import useStyles from "./style";
const Main = () => {
    const classes = useStyles();
    return (
        <Card className={classes.lecturerCard}>
            <UserProfile/>
        </Card>
    );
}

export default Main;