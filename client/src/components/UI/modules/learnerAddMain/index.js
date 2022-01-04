import { Card, useMediaQuery } from '@material-ui/core';
import useStyles from './style';
import LecturerList from '../../atoms/lecturer_list';
const Main = () => {
    const classes = useStyles();
    //media query
    const isMobile = useMediaQuery('(max-width:600px)');
    const isTablet = useMediaQuery('(max-width:1024px)');
    return (
        <Card
            className={
                isMobile
                    ? classes.cardModible
                    : isTablet
                    ? classes.cardTablet
                    : classes.card
            }
            elevation={10}
        >
            <LecturerList />
        </Card>
    );
};

export default Main;
