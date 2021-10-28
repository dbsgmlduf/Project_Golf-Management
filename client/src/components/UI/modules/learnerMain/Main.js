import { Card } from "@material-ui/core";
import UserProfile from "../../atoms/customer_profile";
import StudyInfo from "../../atoms/study_info";
import useStyles from "./style";
const Main = () => {
    const classes = useStyles();
    return (
        <Card className={classes.lecturerCard} elevation={10}>
            <UserProfile />
            <StudyInfo />
        </Card>
    );
}

export default Main;