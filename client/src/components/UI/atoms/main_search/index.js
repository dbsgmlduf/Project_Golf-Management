import React from 'react';
import { Search, SearchIconWrapper, StyledInputBase } from './style';
import SearchIcon from '@material-ui/icons/Search';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import useStyles from './style';
import AddButton from '../button_add';

const SearchBar = ({ userName, value, handleSeachKey }) => {
    const classes = useStyles();
    const userType = localStorage.getItem('userType');
    return userType === 'lecturer' ? (
        <AppBar position="static" className={classes.appbar} elevation={10}>
            <Toolbar>
                <Typography
                    className={classes.searchTitle}
                    variant="h6"
                    color="inherit"
                    noWrap
                >
                    {userName}님의 고객 관리 시스템
                </Typography>
                <AddButton />
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
            </Toolbar>
        </AppBar>
    ) : (
        <AppBar position="static" className={classes.appbar} elevation={10}>
            <Toolbar>
                <Typography
                    className={classes.searchTitle}
                    variant="h6"
                    color="inherit"
                    noWrap
                >
                    {userName}님의 강사목록
                </Typography>
                <AddButton />
                <Search className={classes.search}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="강사 검색"
                        inputProps={{ 'aria-label': 'search' }}
                        value={value}
                        onChange={handleSeachKey}
                    />
                </Search>
            </Toolbar>
        </AppBar>
    );
};
export default SearchBar;
