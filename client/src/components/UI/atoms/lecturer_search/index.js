import React from 'react';
import { Search, StyledInputBase } from './style';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import useStyles from "./style";

const LecturerSearchBar = ({ value, handleSeachKey }) => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.appbar} elevation={10}>
            <Toolbar>
                <Typography className={classes.searchTitle} variant="h6" color="inherit" noWrap>
                    강사 등록
                </Typography>
                <Search>
                    <StyledInputBase
                        placeholder="강사 검색"
                        inputProps={{ 'aria-label': 'search' }}
                        value={value}
                        onChange={handleSeachKey}
                    />
                </Search>
            </Toolbar>
        </AppBar>
    )
};
export default LecturerSearchBar;