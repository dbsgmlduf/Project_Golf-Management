
const {Lecturer, Learner, sequelize, ClassInfo} = require('../../models');
const {Enrollment} = require('../../models')

exports.createRelations = async({attendee, username}) => {
    const enrollment = await Lecturer.findOne({
        attributes: ['lecturer_no'],
        include: [{
            model: Learner,
            required: true,
            where: {attendee}
        }],
        where: {username}
    });
    console.log("조인결과 = ",enrollment);
    
    return result;
};