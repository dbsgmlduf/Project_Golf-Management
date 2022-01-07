import Header from '../UI/modules/header/Header';
import Footer from '../UI/modules/footer/Footer';
import { Grid } from '@mui/material';
//import Main from '../UI/modules/calendarMain';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

moment.locale('en-GB');
BigCalendar.momentLocalizer(moment);

const CalendarPage = (props) => {
    return (
        <Grid sx={{ m: 0 }}>
            <Header />
            {/* <Main /> */}
            <div style={{ height: 500 }}>
                <BigCalendar
                    events={[]}
                    step={60}
                    view="month"
                    views={['month']}
                    min={new Date(2022, 0, 1, 9, 0)}
                    max={new Date(2022, 0, 1, 10, 0)}
                    date={new Date()}
                />
            </div>
            <Footer />
        </Grid>
    );
};

export default CalendarPage;
