const db = require('./db/lecturer');

//요청서 확인
exports.getRequest = async({ instructor }) => {
    const reqResult = await db.selectRequest({ instructor });
    return reqResult;
};

//등록 요청 수락
exports.setAgreement = async({ instructor, username, agreement }) => {
    const isEnrolled = await db.updateEnrollment({ instructor, username, agreement });
    return isEnrolled;
};

//나의 회원정보 조회
exports.getMyList = async({ instructor }) => {
    const myList = await db.selectMyList({ instructor });
    return myList;
};

//전체 회원정보 조회
exports.getList = async({ instructor }) => {
    const list = await db.selectList({ instructor });
    return list;
};

//강의정보 입력
exports.createInfo = async({ instructor, username, session_no, lec_theme, lec_contents, supplement_items, class_date, next_class_date }) => {
    const result = await db.createInfo({ instructor, username, session_no, lec_theme, lec_contents, supplement_items, class_date, next_class_date });
    return result;
};

//강의정보 조회
exports.getInfo = async({ instructor, username }) => {
    const result = await db.selectInfo({ instructor, username });
    return result;
};