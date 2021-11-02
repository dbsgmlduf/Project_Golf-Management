const userApp = require('../../application/learner');

exports.enrollLecturer = async (req, res, next) => {
    try{
        const {attendeeId} = req.params;
        const lecturer = req.body;
        const isEnrolled = await userApp.isEnrolled(attendeeId, lecturer);
        res.json({
            isEnrolled,
            message: 'Enrollment SUCCESS!!'
        });
    } catch (error){
        res.status(400).json({
            message: "YOU FAILED!"
        });
    }
}