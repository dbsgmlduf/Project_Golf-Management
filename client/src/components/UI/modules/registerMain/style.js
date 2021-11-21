import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: 30,
        width: 350,
        height: 350,
        margin: '90px auto',
    },
    avatar: {
        backgroundColor: '#C8E717',
    },
    icon: {
        color: '#0C4BC4',
        fontSize: 'large',
    },
}));

export default useStyles;
