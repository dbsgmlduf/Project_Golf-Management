'use strict';

const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

//define model
db.Instructor = require('./instructor')(sequelize, Sequelize);
db.Learner = require('./learner')(sequelize, Sequelize);

//define association
db.Instructor.belongsToMany(db.Learner, {through: 'takes', foreignKey:'teacher'})
db.Learner.belongsToMany(db.Instructor, {through:'takes', foreignKey:'student'})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

