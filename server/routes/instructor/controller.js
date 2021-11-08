const userApp = require('../../application/lecturer');

//강사 --> 특정 회원의 강사등록 요청서 확인 API
exports.getRequest = async (req, res, next) => {
    try{
        const instructor = req.user.lecturer_no;
        const request = await userApp.request({instructor});
        //console.log("===결과===", JSON.stringify(request));
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

//강사 --> 요청서 수락 API
exports.setAgreement = async (req, res, next) => {
    try{
        const {agreement, username} = req.body;
        const instructor = req.user.lecturer_no;
        const result = await userApp.setEnrollment({agreement,username,instructor});
        res.json({  
            result,
            //data: true,
            message: '등록 수락'
        })

    } catch(error){
        res.status(400).json({
            message: "수락 실패"
        })
    }
}

//강사 --> 자신의 회원정보 출력 API
exports.getMylist = async (req, res, next) => {
    try{
        const instructor = req.user.lecturer_no
        const myList = await userApp.getMyList({instructor});
        res.json({
            list: myList,
            message: 'success'
        })
    } catch(error){

    }
}

//강사 --> 전체 회원정보 출력 API
exports.getList = async (req, res, next) => {
    try{
        const instructor = req.user.lecturer_no;
        const list = await userApp.getList({instructor});
        res.json({
            list: list,
            message: 'success'
        })
    } catch(error){
        
    }
};

//강사 --> 회원 강의정보 입력 API
exports.inputInfo = async (req, res, next) => {
    try{
        const instructor = req.user.lecturer_no;
        const { username, session_no, lec_theme, lec_contents, supplement_items, class_date, next_class_date } = req.body;
        await userApp.createInfo({ instructor, username, session_no, lec_theme, lec_contents, supplement_items, class_date, next_class_date });
        res.json({
            inputSuccess: true,
            message: 'Input SUCCESS'
        });
    } catch (error){
        res.status(400).json({
            message: "YOU FAILED!"
        });
    }
};

//강사 --> 강의 정보 조회 API
exports.getInfo = async (req, res, next) => {
    try{
        const instructor = req.user.lecturer_no;
        const {username} = req.body;
        const info = await userApp.selectInfo({instructor, username});
        res.json({
            info,
            message: 'SUCCESS getinfo'
        });
    } catch (error){
        res.status(400).json({
            message: "YOU FAILED!"
        });
    }
}