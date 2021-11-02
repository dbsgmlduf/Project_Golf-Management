const {Lecturer, Learner, sequelize} = require('../../models');

exports.createRelations = async(attendeeId, lecturer) => {
    const result = await sequelize.query(
        `INSERT INTO enrollment (lecturer_no, learner_no)
         SELECT lecturer_no, learner_no
         FROM lecturer, learner
         WHERE lecturer.username = ${lecturer} and learner.id = ${attendeeId} `,
         {
             type : sequelize.QueryTypes.INSERT,
         }
    );
    console.log(result);
    return result;
};