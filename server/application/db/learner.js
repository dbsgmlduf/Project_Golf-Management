const {Lecturer, Learner, Enrollment, sequelize, ClassInfo, Sequelize} = require('../../models');
const Op = Sequelize.Op;

exports.selectAllLecturer = async () => {
    const results = await Lecturer.findAll({
        attributes: ['username'],
    });
    return results;
};

exports.createEnrollment = async({ attendee, username }) => {
    const values = await selectLecturerNo({username});
    const result = await Enrollment.create(values);
    return result;
};

const selectLecturerNo = async( {username} ) => {
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
    return value;
};