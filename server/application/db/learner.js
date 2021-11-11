const {Lecturer, Learner, Enrollment, sequelize, ClassInfo, Sequelize} = require('../../models');
const { selectLecturerNo } = require('../db/check');
const Op = Sequelize.Op;

exports.selectAllLecturer = async () => {
    const results = await Lecturer.findAll({
        attributes: ['username'],
    });
    return results;
};

exports.createEnrollment = async({ attendee, username }) => {
    const no = await selectLecturerNo({ username });
    const values = {
        lecturer_no: no,
        learner_no: attendee
    }
    const result = await Enrollment.create(values);
    return result;
};