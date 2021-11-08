import { Grid } from "@material-ui/core";
import React from "react";
import Footer from "../UI/modules/footer/Footer";
import Header from "../UI/modules/header/Header";
import Main from "../UI/modules/profileMain";

const ProfilePage = () => {
    return (
        <Grid>
            <Header />
            <Main />
            <Footer />
        </Grid>
    );
};

export default ProfilePage;