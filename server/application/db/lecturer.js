const {Lecturer, Learner, Enrollment, sequelize, ClassInfo, Sequelize} = require('../../models');
const enrollment = require('../../models/enrollment');
const learner = require('../../models/learner');
const lecturer = require('../../models/lecturer');
const { selectLearnerNo } = require('../db/check');
const Op = Sequelize.Op;

exports.selectRequest = async({ instructor }) => {
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
                { lecturer_no: instructor },
                { isEnrolled: 0}
            ]
        }
    });
    return result;
};

exports.updateEnrollment = async({ instructor, username, agreement }) => {
    const x = Number(agreement);
    const learnerNo = await selectLearnerNo({ username });
    const result = await Enrollment.update(
        { isenrolled: x },
        {where: {
            [Op.and]:[
                { lecturer_no: instructor },
                { learner_no: learnerNo }
            ]            
        }}
        );
        return result;
};

exports.selectMyList = async ({ instructor }) => {
    const result = await Learner.findAll({
        attributes: ['username'],
        include: [{
            model: Enrollment,
            attributes:[],
            where: {
                [Op.and]:[
                    { lecturer_no: instructor },
                    { isEnrolled: 1 }
                ]
            }
        }]
    })
    console.log("결과", JSON.stringify(result));
    return result;
};

exports.selectList = async ({ instructor }) => {
    const result = await Learner.findAll({
        attributes: ['username'],
        include: [{
            model: Enrollment,
            attributes:[],
            where: { isEnrolled: 1}
        }]
    })
    console.log("결과", JSON.stringify(result));
    return result;
}


exports.createInfo = async({ instructor, username, session_no, lec_theme, lec_contents, supplement_items, class_date, next_class_date }) => {
    const attendee = await selectLearnerNo({ username });
    const classInfo = {
        session_no: session_no,
        lecturer_no: instructor,
        learner_no: attendee,
        lec_theme: lec_theme,
        lec_contents: lec_contents,
        supplement_item: supplement_items,
        class_date: class_date,
        next_class_date: next_class_date
    }
    const result = await ClassInfo.create(classInfo);
    console.log("결과",result);
    return result;
};

exports.selectInfo = async({ instructor, username }) => {
    const attendee = await selectLearnerNo({ username });
    const result = await ClassInfo.findAll({
        attributes: ['session_no', 'lec_theme', 'lec_contents', 'supplement_item', 'class_date', 'next_class_date'],
        where: {
            [Op.and]: [
                { lecturer_no: instructor },
                { learner_no: attendee }
            ]
        }
    });
    return result;
};