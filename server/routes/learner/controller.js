const userApp = require('../../application/learner');

exports.enrollLecturer = async (req, res, next) => {
    try{
        const lecturer = req.body;
        const x = req.body.id;
        console.log(x);
        const isEnrolled = await userApp.isEnrolled(x,lecturer);
        res.json({
            message: '등록 요청을 보냈습니다.'
        });
    } catch (error){
        res.status(400).json({
            message: "강사 등록에 실패하셨습니다."
        });
    }
}