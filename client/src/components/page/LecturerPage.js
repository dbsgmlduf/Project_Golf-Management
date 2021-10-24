import Header from '../UI/modules/header/Header';
import Main from '../UI/modules/lecturerMain/Main';
import Footer from '../UI/modules/footer/Footer';
import { Grid } from '@material-ui/core';

const LecturerPage = (props) => {


    return (
        <Grid>
            <Header />
            <Main />
            <Footer />
        </Grid>
    );
}

export default LecturerPage;