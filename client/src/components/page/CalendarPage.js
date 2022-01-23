import Header from '../UI/modules/header/Header';
import Footer from '../UI/modules/footer/Footer';
import { Grid } from '@mui/material';
//import Main from '../UI/modules/calendarMain';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);
// ★★★★★★★달력 배경색 변경 필요★★★★★★★★★
// 효과적으로 잘 안보임 (글씨,날짜 등)
// 예약시 현재 예약가능한 강사 보이도록 추가
const CalendarPage = (props) => {
    return (
        <Grid sx={{ m: 0 }}>
            <Header />
            {/* <Main /> */}
            <div style={{ height: 500 }}>
                <Calendar
                    //events={[]}
                    step={60}
                    view="month"
                    views={['month']}
                    min={new Date(2022, 0, 1, 9, 0)}
                    max={new Date(2022, 0, 1, 10, 0)}
                    defaultDate={new Date()}
                    localizer={localizer}
                />
            </div>
            <Footer />
        </Grid>
    );
};

export default CalendarPage;
