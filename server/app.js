require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
const passport = require('passport');
const models = require('./models');
const passportConfig = require('./passport');