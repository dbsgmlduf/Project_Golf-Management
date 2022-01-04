import Header from '../UI/modules/header/Header';
import Main from '../UI/modules/learnerAddMain';
import Footer from '../UI/modules/footer/Footer';
import { CssBaseline, Grid } from '@material-ui/core';

const LearnerPage = (props) => {
    return (
        <Grid>
            <CssBaseline />
            <Header />
            <Main />
            <Footer />
        </Grid>
    );
};

export default LearnerPage;
