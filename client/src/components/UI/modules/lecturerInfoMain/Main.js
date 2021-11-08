import { Card } from "@material-ui/core";
import UserProfile from "../../atoms/info_profile";
import StudyInfo from "../../atoms/info_list";
import useStyles from "./style";
const Main = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.lecturerCard} elevation={10}>
            <UserProfile username={props.username}/>
            <StudyInfo username={props.username}/>
        </Card>
    );
}

export default Main;