const db = require('./db/lecturer');

exports.request = async({instructor}) => {
    const selection = await db.selectRequest({instructor});
    return selection;
}

exports.setEnrollment = async({agreement,username,instructor}) => {
    const result = await db.setAgreement({agreement,username,instructor});
    return result;
}