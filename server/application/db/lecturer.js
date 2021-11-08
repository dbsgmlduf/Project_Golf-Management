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
        where: {
            [Op.and]:[
                {lecturer_no: instructor},
                {isEnrolled:0}
            ]
        }
    });
    return result;
}

exports.setAgreement = async({agreement,username,instructor}) => {
    const x = Number(agreement);
    const learnerNo = await getLearnerNo({username});
    const result = await Enrollment.update(
        {isenrolled: x},
        {where: {
            [Op.and]:[
                {lecturer_no: instructor},
                {learner_no: learnerNo}
            ]            
        }}
        );
        return result;
};

exports.getMyList = async ({instructor}) => {
    const result = await Learner.findAll({
        attributes: ['username'],
        include: [{
            model: Enrollment,
            attributes:[],
            where: {
                [Op.and]:[
                    {lecturer_no: instructor},
                    {isEnrolled: 1}
                ]
            }
        }]
    })
    console.log("결과", JSON.stringify(result));
    return result;
}

exports.getList = async ({instructor}) => {
    const result = await Learner.findAll({
        attributes: ['username'],
        include: [{
            model: Enrollment,
            attributes:[],
            where: {isEnrolled: 1}
        }]
    })
    console.log("결과", JSON.stringify(result));
    return result;
}
const getLearnerNo = async({username}) => {
    const no = await Learner.findAll({
        attributes: ['learner_no'],
        where:{username}
    });
    const tmp = JSON.parse(JSON.stringify(no));
    const result = tmp[0].learner_no;
    return result;
};