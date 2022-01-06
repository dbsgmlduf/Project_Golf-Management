import Header from '../UI/modules/header/Header';
import Footer from '../UI/modules/footer/Footer';
import { Grid } from '@mui/material';
import Main from '../UI/modules/calendarMain';
const CalendarPage = (props) => {
    return (
        <Grid sx={{ m: 0 }}>
            <Header />
            <Main />
            <Footer />
        </Grid>
    );
};

export default CalendarPage;
//220106 give up
