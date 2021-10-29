import { Search, SearchIconWrapper, StyledInputBase } from './style';
import SearchIcon from "@material-ui/icons/Search"
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import useStyles from "./style";
import AddCustomer from '../add_customer';

export default function SearchBar() {

    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.searchTitle} variant="h6" color="inherit" noWrap>
                    고객 관리 시스템
                </Typography>
                <AddCustomer/>
                <Search>
                    {/* <SearchIconWrapper>
                        <SearchIcon/>
                    </SearchIconWrapper> */}
                    <StyledInputBase
                        placeholder="고객 검색"
                        inputProps={{ 'aria-label': 'search' }}

                    />
                </Search>
            </Toolbar>
        </AppBar>
    )
};