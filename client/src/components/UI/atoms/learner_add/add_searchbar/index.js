import React from 'react';
import { Search, StyledInputBase, SearchIconWrapper } from './style';
import SearchIcon from '@material-ui/icons/Search';
import { AppBar, Toolbar, Typography, useMediaQuery } from '@material-ui/core';
import useStyles from './style';

const AddSearchBar = ({ value, handleSeachKey }) => {
    const classes = useStyles();
    //media query
    const isMobile = useMediaQuery('(max-width:600px)');
    const isTablet = useMediaQuery('(max-width:1024px)');

    return (
        <AppBar position="static" className={classes.appbar} elevation={10}>
            <Toolbar>
                <Typography
                    className={classes.searchTitle}
                    variant="h6"
                    color="inherit"
                    noWrap
                >
                    회원 등록
                </Typography>
                {isMobile ? null : (
                    <Search>
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
                )}
            </Toolbar>
        </AppBar>
    );
};
export default AddSearchBar;
