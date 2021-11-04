const userApp = require('../../application/learner');

exports.enrollLecturer = async (req, res, next) => {
    try{
        const {username} = req.body;
        const attendee = "changhyun";
        const isEnrolled = await userApp.isEnrolled({attendee,username});
        res.json({
            isEnrolled,
            message: '등록 요청을 보냈습니다.'
        });
    } catch (error){
        res.status(400).json({
            message: "강사 등록에 실패하셨습니다."
        });
    }
}