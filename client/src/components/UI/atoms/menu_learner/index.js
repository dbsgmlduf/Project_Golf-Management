import React, { useState } from "react";
import { Box, SwipeableDrawer, List, Divider, IconButton, Button, Grid } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu"
import { learnerListItems } from "../menu_list";
import useStyles from "./style";
import LogoutButton from "../title_signout";


const LearnerMenu = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    return (
        <Grid>
            <Button>
                <IconButton edge="start" aria-label="open drawer" onClick={() => setOpen(true)}>
                    <MenuIcon className={classes.menuIcon} />
                </IconButton>
            </Button>
            <SwipeableDrawer anchor="right" open={open} onClose={() => setOpen(false)} onOpen={() => { }}>
                <div className={classes.list}>
                    <Box textAlign="center" p={3}>
                        learnerPage
                    </Box>
                    <List>
                        <LogoutButton/>
                        <Divider />
                        {learnerListItems}
                    </List>
                </div></SwipeableDrawer>
        </Grid>
    )
}

export default LearnerMenu;
