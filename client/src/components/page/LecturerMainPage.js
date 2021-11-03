import Header from '../UI/modules/header/Header';
import Main from '../UI/modules/lecturerListMain/Main';
import Footer from '../UI/modules/footer/Footer';
import { Grid } from '@material-ui/core';

const LecturerMainPage = (props) => {

    var getvalue = localStorage.getItem('accessToken');
    console.log('토큰 = ', getvalue);
    return (
        <Grid>
            <Header />
            <Main />
            <Footer />
        </Grid>
    );
}

export default LecturerMainPage;