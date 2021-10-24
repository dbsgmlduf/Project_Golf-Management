import React, { useState } from "react";
import { Box, SwipeableDrawer, List, Divider, IconButton, Grid } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu"
import { mainListItems } from "../list_items";
import useStyles from "./style";
import LoginButton from "../title_signin";
import RegisterButton from "../title_signup";

const LandingMenu = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    return (
        <Grid>
            <IconButton edge="start" aria-label="open drawer" onClick={() => setOpen(true)}>
                <MenuIcon className={classes.menuIcon} />
            </IconButton>
            <SwipeableDrawer anchor="left" open={open} onClose={() => setOpen(false)} onOpen={() => { }}>
                <div className={classes.list}>
                    <Box textAlign="center" p={3}>
                        MainPage
                    </Box>
                    <List>
                        <LoginButton /><RegisterButton />
                        <Divider />
                        {mainListItems}
                    </List>
                </div></SwipeableDrawer>
        </Grid>
    )
}

export default LandingMenu;
