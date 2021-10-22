import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    avatar:{
        backgroundColor:"#C8E717",
    },
    paper: {
        padding: 30,
        height:'40vh',
        width:280,
        margin:"90px auto",
    },
    
    icon:{
        color:"#0C4BC4",
        fontSize:"large"
    },
    signinButton :{
        top : '2vh'
    },
}));

export default useStyles;