const db = require('./db/learner');

exports.getLecturerList = async () => {
    const list = await db.selectAllLecturer();
    return list;
};

exports.setEnrollment = async ({ attendee, username }) => {
    const enroll = await db.createEnrollment({ attendee, username });
    return enroll;
};

exports.getEnrollStatus = async ({attendee}) => {
    const result = await db.selectStatus({attendee});
    return result;
}