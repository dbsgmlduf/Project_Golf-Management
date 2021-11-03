const db = require('./db/learner');

exports.isEnrolled = async (attendee, lecturer) => {
    const enroll = await db.createRelations(attendee,lecturer);
    return enroll;
};