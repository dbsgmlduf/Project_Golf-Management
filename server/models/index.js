const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

//define model
db.Lecturer = require('./lecturer')(sequelize, Sequelize);
db.Learner = require('./learner')(sequelize, Sequelize);
db.Enrollment = require('./enrollment')(sequelize, Sequelize);
db.ClassInfo = require('./classinfo')(sequelize, Sequelize);
db.DateInfo = require('./dateinfo')(sequelize, Sequelize);

//define association
db.Learner.hasMany(db.Enrollment, {foreignKey: 'learner_no', sourceKey: 'learner_no'});
db.Enrollment.belongsTo(db.Learner, {foreignKey: 'learner_no', sourceKey: 'learner_no'});

db.Lecturer.hasMany(db.Enrollment, {foreignKey: 'lecturer_no', sourceKey: 'lecturer_no'});
db.Enrollment.belongsTo(db.Lecturer, {foreignKey: 'lecturer_no', sourceKey: 'lecturer_no'});

db.Learner.hasMany(db.DateInfo, {foreignKey: 'learner_no', sourceKey: 'learner_no'});
db.DateInfo.belongsTo(db.Learner, {foreignKey: 'learner_no', sourceKey: 'learner_no'});

db.Learner.hasMany(db.ClassInfo, {foreignKey: 'learner_no', sourceKey: 'learner_no'});
db.ClassInfo.belongsTo(db.Learner, {foreignKey: 'learner_no', sourceKey: 'learner_no'});

db.Lecturer.hasMany(db.ClassInfo, {foreignKey: 'lecturer_no', sourceKey: 'lecturer_no'});
db.ClassInfo.belongsTo(db.Lecturer, {foreignKey: 'lecturer_no', sourceKey: 'lecturer_no'});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

