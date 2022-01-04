import Header from '../UI/modules/header/Header';
import Main from '../UI/modules/lecturerInfoMain';
import Footer from '../UI/modules/footer/Footer';
import { Grid } from '@material-ui/core';

const LecturerInfoPage = (props) => {
    return (
        <Grid>
            <Header />
            <Main username={props.match.params.username} />
            <Footer />
        </Grid>
    );
};

export default LecturerInfoPage;
