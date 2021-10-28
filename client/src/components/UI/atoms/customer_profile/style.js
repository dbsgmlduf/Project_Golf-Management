import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    title :{
        
        flexGrow: '1',
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
}));

export default useStyles;