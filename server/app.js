require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');

const models = require('./models');
const passportConfig = require('./passport');
const apiRouter = require('./routes');
const handleErrors = require('./middlewares/handleErrors');
const { NotFound } = require('./utils/error');

const app = express();

app.use(cors({origin: true, credentials: true}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

models.sequelize.sync().then(() => {
    DEV_PORT = process.env.PORT;
    app.listen(DEV_PORT, () => {
        console.log(`SERVER RUN: ${DEV_PORT}`)
    });
});

app.use(passport.initialize());
passportConfig();

app.use('/api',apiRouter);

app.use((req, res, next) => {
    throw new NotFound('invalid API URL');
});

app.use(handleErrors);

module.exports = app;