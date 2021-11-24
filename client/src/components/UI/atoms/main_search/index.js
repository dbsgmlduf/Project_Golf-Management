import React from 'react';
import { Search, SearchIconWrapper, StyledInputBase } from './style';
import SearchIcon from '@material-ui/icons/Search';
import { AppBar, Toolbar, Typography, useMediaQuery } from '@material-ui/core';
import useStyles from './style';

const SearchBar = ({ userName, value, handleSeachKey }) => {
    const classes = useStyles();
    //media query
    const isMobile = useMediaQuery('(max-width:600px)');
    //const isTablet = useMediaQuery('(max-width:1024px)');

    const userType = localStorage.getItem('userType');
    return (
        <AppBar position="static" className={classes.appbar} elevation={10}>
            <Toolbar>
                {userType === 'lecturer' ? (
                    <Typography
                        className={classes.searchTitle}
                        variant="h6"
                        color="inherit"
                        noWrap
                    >
                        {userName}님의 고객 관리 시스템
                    </Typography>
                ) : (
                    <Typography
                        className={classes.searchTitle}
                        variant="h6"
                        color="inherit"
                        noWrap
                    >
                        {userName}님의 강사목록
                    </Typography>
                )}
                {isMobile ? null : (
                    <Search className={classes.search}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="고객 검색"
                            inputProps={{ 'aria-label': 'search' }}
                            value={value}
                            onChange={handleSeachKey}
                        />
                    </Search>
                )}
            </Toolbar>
        </AppBar>
    );
};
export default SearchBar;
