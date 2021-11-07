const {Lecturer, Learner, Enrollment, sequelize, ClassInfo, Sequelize} = require('../../models');
const enrollment = require('../../models/enrollment');
const learner = require('../../models/learner');
const lecturer = require('../../models/lecturer');
const Op = Sequelize.Op;

exports.selectRequest = async({instructor}) => {
    const result = await Enrollment.findAll({
        attributes: ['isEnrolled'],
        include: [{
            model: Learner,
            required: true,
            attributes: ['username'],
            where:{
                learner_no:{
                    [Op.col]: 'Enrollment.learner_no'
                }
            }
        }],
        where: {lecturer_no: instructor}
    });
    return result;
}

exports.setAgreement = async({agreement,username,instructor}) => {
    console.log("*****수락*****", typeof agreement);
    console.log("*****학습자이름*****",typeof username);
    console.log("*****강사번호*****",typeof instructor);
}