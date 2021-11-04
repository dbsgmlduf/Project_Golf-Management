
const {Lecturer, Learner, sequelize} = require('../../models');
const {Enrollment} = require('../../models')

exports.createRelations = async({attendee, username}) => {
    console.log({attendee, username});
    console.log('강사이름:', username);
    console.log('수강자아이디:', attendee);
    const enrollment = await Lecturer.findAll({
        include: [
            {
                model: Learner,
            }
        ]
        // attributes: ['lecturer_no'],
        // where: {username: username},
        
    });
    console.log(enrollment);
    
    //const result = await Enrollment.create(enrollment);
    
    console.log(result);
    
    return result;
};