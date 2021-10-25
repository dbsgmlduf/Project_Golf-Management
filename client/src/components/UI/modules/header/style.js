import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container:{
        display : 'flex'
    },
    
    appbar: {
        background: 'none',
    },
    title: {
        flexGrow: '1',
        color: '#000000',
        fontSize: '1rem',
    },
    icon: {
        color: '#000000',
        fontSize: '2rem',
    },
}));

export default useStyles;