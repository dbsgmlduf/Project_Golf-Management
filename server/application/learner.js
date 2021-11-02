const db = require('./db/learner');

exports.isEnrolled = async (attendeeId, lecturer) => {
    const enroll = await db.createRelations(attendeeId, lecturer);
    return enroll;
};