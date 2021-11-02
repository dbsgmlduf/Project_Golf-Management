import React from 'react';
import { Search, SearchIconWrapper, StyledInputBase } from './style';
import SearchIcon from "@material-ui/icons/Search"
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import useStyles from "./style";
import AddCustomer from '../../modules/add_customer/index';

const SearchBar = ({ value, handleSeachKey }) => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.appbar} elevation={10}>
            <Toolbar>
                <Typography className={classes.searchTitle} variant="h6" color="inherit" noWrap>
                    고객 관리 시스템
                </Typography>
                <AddCustomer />
                <Search>
                    {/* <SearchIconWrapper>
                        <SearchIcon/>
                    </SearchIconWrapper> */}
                    <StyledInputBase
                        placeholder="고객 검색"
                        inputProps={{ 'aria-label': 'search' }}
                        value={value}
                        onChange={handleSeachKey}
                    />
                </Search>
            </Toolbar>
        </AppBar>
    )
};
export default SearchBar;