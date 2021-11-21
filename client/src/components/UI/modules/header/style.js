import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
    },

    appbar: {
        minHeight: '10vh',
        gridArea: 'header',
    },
    title: {
        flexGrow: '1',
        color: '#F6F6F6',
        fontSize: '2rem',
    },
}));

export default useStyles;
