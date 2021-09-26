require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
//const passport = require('passport');
const models = require('./models');
//const passportConfig = require('./passport');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({origin: true, credentials: true}));
app.use(cookieParser());

models.sequelize.sync().then(() => {
    DEV_PORT = process.env.PORT;
    app.listen(DEV_PORT, () => {
        console.log(`SERVER RUN: ${DEV_PORT}`)
    });
});

//app.use(passport.initialize());
//passportConfig();

module.exports = app;