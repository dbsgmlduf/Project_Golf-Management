import Header from '../UI/modules/header/Header';
import Footer from '../UI/modules/footer/Footer';
import { Grid } from '@mui/material';
import Main from '../UI/modules/landingMain';
const LandingPage = (props) => {
    return (
        <Grid sx={{ m: 0 }}>
            <Header />
            <Main />
            <Footer />
        </Grid>
    );
};

export default LandingPage;
