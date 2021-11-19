const db = require('./db/lecturer');
const { selectLearnerNo, selectLecturerNo } = require('./db/check');
//const { selectLecturerNo } = require('./db/check');

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
    const username = await db.selectLecturerName({ instructor });
    const myList = await db.selectMyList({ instructor });
    return { username, myList };
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
exports.getInfo = async({ username, instructor }) => {
    const attendee = await selectLearnerNo({ username });
    const result = await db.selectInfo({ attendee, instructor });
    return result;
};

//강의상세정보 조회
exports.getDetailInfo = async({ instructor, username, session_no }) => {
    const result = await db.selectDetailInfo({ instructor, username, session_no });
    return result;
};

//강의정보 수정
exports.updateInfo = async({instructor, username, session_no, lec_theme, lec_contents, supplement_items, class_date, next_class_date}) => {
    const attendee = await selectLearnerNo({username});
    const result = await db.updateInfo({instructor, attendee, session_no, lec_theme, lec_contents, supplement_items, class_date, next_class_date});
    return result;
};

//강의기간 정보 입력
exports.createDateInfo = async({ instructor, username, start_time, finish_time }) => {
    const attendee = await selectLearnerNo({ username });
    const result = await db.createDateInfo({ instructor, attendee, start_time, finish_time });
    return result;
};

//특정 강사 이름 조회.
exports.getCertainLecturer = async({ instructor, username }) => {
    const user = await db.selectLecturerName({ instructor });
    const attendee = await selectLearnerNo({ username });
    const result = await db.selectCertainLecturer({attendee});
    return {user, result};
}