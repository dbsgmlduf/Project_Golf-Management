const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

//define model
db.User = require('./user')(sequelize, Sequelize);
//db.Learner = require('./learner')(sequelize, Sequelize);
db.Enrollment = require('./enrollment')(sequelize, Sequelize);

//define association
db.User.belongsToMany(db.User, {as: 'attendee', through: db.Enrollment, foreignKey:'lecturer_No'})
db.User.belongsToMany(db.User, {as: 'lecturer', through: db.Enrollment, foreignKey:'attendee_No'})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

