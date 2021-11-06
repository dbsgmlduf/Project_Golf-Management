import Header from '../UI/modules/header/Header';
import Footer from '../UI/modules/footer/Footer';
import BackVideo from '../UI/atoms/background_video';
import { Grid } from '@mui/material';

const LandingPage = (props) => {

    return(
        <Grid container spacing={1}>
            <BackVideo/>
            <Header/>
            <Footer/>
        </Grid>
    );
}

export default LandingPage;