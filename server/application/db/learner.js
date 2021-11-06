
const {Lecturer, Learner, Enrollment, sequelize, ClassInfo, Sequelize} = require('../../models');
const Op = Sequelize.Op;

exports.createRelations = async({attendee, username}) => {
    const lecturer = await Lecturer.findAll({
        attributes: ['lecturer_no'],
        where: {username}
    })
    const tmp = JSON.parse(JSON.stringify(lecturer));
    const no = tmp[0].lecturer_no;
    const value = {
        lecturer_no: no,
        learner_no: attendee
    }
    const result = await Enrollment.create(value);
    return result;
};