import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
    },

    appbar: {
        backgroundColor: '#58555A',
        background: 'inherit',
    },
    title: {
        flexGrow: '1',
        color: '#000000',
        fontSize: '2rem',
    },
}));

export default useStyles;
