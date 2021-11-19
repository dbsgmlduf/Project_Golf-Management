const db = require('./db/learner');
const { selectLearnerNo } = require('./db/check');

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
};

exports.getMylecturer = async ({attendee}) => {
    const username = await db.selectLearnerName({attendee});
    const result = await db.selectMylecturer({attendee});
    return {username, result};
};

exports.getClassInfo = async({ username, instructor }) => {
    const attendee = await selectLearnerNo({ username });
    const result = await db.selectClassInfo({ attendee, instructor });
    return result;
};