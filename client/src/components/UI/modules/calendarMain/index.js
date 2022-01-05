import React from 'react';
import { Calendar, Views } from 'react-big-calendar';
import * as dates from './dates';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.

const Main = (props) => {
    const ColoredDateCellWrapper = ({ children }) =>
        React.cloneElement(React.Children.only(children), {
            style: {
                backgroundColor: 'lightblue',
            },
        });
    return (
        <div>
            <Calendar
                //events={events}
                views={allViews}
                step={60}
                showMultiDayTimes
                max={dates.add(
                    dates.endOf(new Date(2015, 17, 1), 'day'),
                    -1,
                    'hours'
                )}
                defaultDate={new Date(2015, 3, 1)}
                components={{
                    timeSlotWrapper: ColoredDateCellWrapper,
                }}
                localizer={localizer}
            />
        </div>
    );
};

export default Main;
