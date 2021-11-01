import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    avatar:{
        backgroundColor:"#C8E717",
    },
    paper: {
        padding: 30,
        width:300,
        height:300,
        margin:"90px auto",
    },
    registerPaper: {
        padding: 30,
        width:500,
        margin:"90px auto",
    },
    icon:{
        color:"#0C4BC4",
        fontSize:"large"
    },
    contents:{
        padding: '30px',
        width: '400px',
    },
    button:{
        top :'3vh',
    },
    radio:{
        top:'2vh',
    },
}));

export default useStyles;