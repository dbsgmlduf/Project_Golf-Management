const userApp = require('../../application/lecturer');

exports.getRequest = async (req, res, next) => {
    try{
        const instructor = req.user.lecturer_no;
        const request = await userApp.request({instructor});
        console.log("===결과===", JSON.stringify(request));
        res.json({
            request,
            message: '요청이 왔습니다.'
        })
    } catch (error){
        res.status(400).json({
            message: "조회에 실패하셨습니다."
        });
    }
}

exports.setAgreement = async (req, res, next) => {
    try{
        const {agreement, username} = req.body;
        const instructor = req.user.lecturer_no;
        await userApp.setEnrollment({agreement,username,instructor});
        res.json({
            data: true,
            message: '등록 수락'
        })

    } catch(error){
        res.status(400).json({
            message: "수락 실패"
        })
    }
}

exports.inputInfo = async (req, res, next) => {
    try{
        const { usertype, username, email, id, password } = req.body;
        
        res.json({
            registerSuccess: true,
            message: 'Register SUCCESS!!'
        });
    } catch (error){
        res.status(400).json({
            message: "YOU FAILED!"
        });
    }
}