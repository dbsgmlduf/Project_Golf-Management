const db = require('./db/lecturer');

exports.request = async({instructor}) => {
    const selection = await db.selectRequest({instructor});
    return selection;
}

exports.setEnrollment = async({agreement,username,instructor}) => {
    const result = await db.setAgreement({agreement,username,instructor});
    return result;
}

exports.getMyList = async({instructor}) => {
    const result = await db.getMyList({instructor});
    return result;
}

exports.getList = async({instructor}) => {
    const result = await db.getList({instructor});
    return result;
}