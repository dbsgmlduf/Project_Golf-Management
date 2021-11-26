import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './style';
import Main from '../main';
import SearchBar from '../main_search';

const MainList = (props) => {
    const classes = useStyles();

    //search
    const [serchKeyword, setSearchKeyWord] = useState();
    //search event handler
    const handleSeachKey = (e) => {
        setSearchKeyWord(e.currentTarget.value);
    };

    //data search
    const filteredData = (data) => {
        data = data.filter((c) => {
            return c.username.indexOf(serchKeyword) > -1;
        });
        return data.map((c) => {
            return <Main key={c.username} name={c.username} />;
        });
    };
    return (
        <Grid>
            <SearchBar
                userName={props.userName}
                value={serchKeyword}
                handleSeachKey={handleSeachKey}
            />

            {serchKeyword
                ? filteredData(props.users)
                : props.users.map((c) => {
                      return <Main key={c.username} name={c.username} />;
                  })}
        </Grid>
    );
};

export default MainList;
