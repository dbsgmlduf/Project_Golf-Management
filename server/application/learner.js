const db = require('./db/learner');

exports.isEnrolled = async ({attendee, username}) => {
    const enroll = await db.createRelations({attendee, username});
    console.log("testResult=",enroll);
    return enroll;
};