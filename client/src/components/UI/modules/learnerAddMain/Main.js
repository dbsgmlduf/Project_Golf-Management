import { Card } from '@material-ui/core';
import useStyles from './style';
import LecturerList from '../../atoms/lecturer_list';
const Main = () => {
    const classes = useStyles();
    return (
        <Card className={classes.learnerCard} elevation={10}>
            <LecturerList />
        </Card>
    );
};

export default Main;
