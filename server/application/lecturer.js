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

exports.createInfo = async({ instructor, username, session_no, lec_theme, lec_contents, supplement_items, class_date, next_class_date }) => {
    const result = await db.createInfo({ instructor, username, session_no, lec_theme, lec_contents, supplement_items, class_date, next_class_date });
    return result;
}

exports.selectInfo = async({instructor, username}) => {
    const result = await db.getInfo({instructor, username});
    return result;
}