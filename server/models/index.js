const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

//define model
db.Instructor = require('./instructor')(sequelize, Sequelize);
db.Learner = require('./learner')(sequelize, Sequelize);
db.Enrollment = require('./enrollment')(sequelize, Sequelize);

//define association
db.Instructor.belongsToMany(db.Learner, {as: 'attendee', through: db.Enrollment, foreignKey:'no'})
db.Learner.belongsToMany(db.Instructor, {as: 'lecturer', through: db.Enrollment, foreignKey:'no'})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

