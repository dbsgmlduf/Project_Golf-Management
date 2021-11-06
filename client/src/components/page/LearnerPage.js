import Header from '../UI/modules/header/Header';
import Main from '../UI/modules/learnerMain/Main';
import Footer from '../UI/modules/footer/Footer';
import { CssBaseline, Grid } from '@material-ui/core';
import useStyles from './style';

const LearnerPage = (props) => {
    
    const classes = useStyles();

    return (
        <Grid>
            <CssBaseline/>
            <Header />
            <Main/>
            <Footer />
        </Grid>
    );
}

export default LearnerPage;