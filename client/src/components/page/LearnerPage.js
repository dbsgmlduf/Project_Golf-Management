import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { Grid } from '@material-ui/core';
import useStyles from './style';

const LearnerPage = (props) => {
    
    const classes = useStyles();

    return (
        <Grid>
            <Header />
            
            <Footer />
        </Grid>
    );
}

export default LearnerPage;