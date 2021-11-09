import { AppBar, Toolbar, Typography } from "@material-ui/core";
import AddStudy from "../add_study";
import useStyles from "./style";

const UserProfile = (props) => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.appbar} elevation={10}>
            <Toolbar>
                <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                    {props.username}회원 정보
                </Typography>
                <AddStudy username={props.username} count={props.count} />
            </Toolbar>
        </AppBar>
    )
};

export default UserProfile