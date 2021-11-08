import Header from '../UI/modules/header/Header';
import Footer from '../UI/modules/footer/Footer';
import { CssBaseline, Grid } from '@material-ui/core';
import Main from '../UI/modules/lecturerAddMain';

const LecturerAddPage = (props) => {
    
    return (
        <Grid>
            <CssBaseline/>
            <Header />
            <Main/>
            <Footer />
        </Grid>
    );
}

export default LecturerAddPage;