import Header from '../UI/modules/header/Header';
import Footer from '../UI/modules/footer/Footer';
import { Grid } from '@mui/material';

const LandingPage = (props) => {

    return(
        <Grid container spacing={1}>
            <Header/>
            <Footer/>
        </Grid>
    );
}

export default LandingPage;