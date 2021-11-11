const userApp = require('../../application/learner');

//회원(일반 사용자) --> 등록된 전체 강사 이름 조회 API
exports.getList = async (req, res, next) => {
    try{
        const lecturerList = await userApp.getLecturerList();
        res.json({
            list: lecturerList,
            message: "전체 강사 정보 조회 성공!"
        });
    } catch(error){
        res.status(401).json({
            message: "전체 강사 정보 조회 실패!"
        });
    }
};

//회원(일반 사용자) --> 특정 강사 등록 신청 API
exports.setEnrollment = async (req, res, next) => {
    try{
        const attendee = req.user.learner_no;
        const usertype = req.user.usertype;
        const { username } = req.body;
        const isSelected = await userApp.setEnrollment({ attendee, username });
        res.json({
            isSelected,
            message: '등록 요청 전송 성공!'
        });
    } catch (error){
        res.status(400).json({
            message: '등록 요청 전송 실패!'
        });
    }
};