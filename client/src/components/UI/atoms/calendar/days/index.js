import React from 'react';
import styled, { keyframes, css } from 'styled-components';
const Main = () => {
    return (
        <Days>
            <Day>
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
            </Day>

            {/* {makeCalendar(year, month)} */}
        </Days>
    );
    const Days = styled.div`
        background-color: #fff;
        width: 93%;
        height: 81%;
        padding: 8px 10px;
        box-sizing: border-box;
        color: #787c9c;
        margin: 0;
        border-radius: 5px;
        font-size: 0.8em;
    `;
    const Day = styled.div`
        width: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        & div {
            min-width: 13%;
            max-height: 5%;
            text-align: center;
            font-weight: 600;
            box-sizing: border-box;
        }
    `;
};

export default Main;
