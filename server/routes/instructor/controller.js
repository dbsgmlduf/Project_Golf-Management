const { OK, CREATED, BAD_REQUEST } = require('../../config/statusCode').statusCode;
const userApp = require('../../application/lecturer');

//강사 --> 특정 회원의 강사등록 요청서 확인 API
exports.getRequest = async (req, res, next) => {
    try{
        const instructor = req.user.lecturer_no;
        const request = await userApp.getRequest({ instructor });
        res.status(OK).json({
            request,
            message: '등록 요청이 왔습니다!'
        })
    } catch (error){
        res.status(BAD_REQUEST).json({
            message: "요청 조회에 실패하셨습니다!"
        });
    }
};

//강사 --> 요청서 수락 API
exports.setAccept = async (req, res, next) => {
    try{
        const instructor = req.user.lecturer_no;
        const { username, agreement } = req.body;
        const result = await userApp.setAgreement({ instructor, username, agreement });
        res.status(CREATED).json({  
            result,
            message: '등록 수락!'
        })

    } catch(error){
        res.status(BAD_REQUEST).json({
            message: "수락 실패!"
        })
    }
};

//강사 --> 자신의 회원정보 조회 API
exports.getMylist = async (req, res, next) => {
    try{
        const instructor = req.user.lecturer_no
        const myList = await userApp.getMyList({instructor});
        const userName = myList.username.username;
        const myLearner = myList.myList;
        res.status(OK).json({
            myLearner,
            userName,
            message: '나의 회원 정보 조회 성공!'
        })
    } catch(error){
        res.status(BAD_REQUEST).json({
            message: "나의 회원 조회 실패!"
        })
    }
};

//강사 --> 전체 회원정보 조회 API
exports.getList = async (req, res, next) => {
    try{
        const instructor = req.user.lecturer_no;
        const list = await userApp.getList({instructor});
        res.status(OK).json({
            list: list,
            message: '전체 회원 정보 조회 성공!'
        })
    } catch(error){
        res.status(BAD_REQUEST).json({
            message: "전체 회원 조회 실패!"
        })
    }
};

//강사 --> 회원 강의정보 입력 API
exports.inputInfo = async (req, res, next) => {
    try{
        const instructor = req.user.lecturer_no;
        const { username, session_no, lec_theme, lec_contents, supplement_items, class_date, next_class_date } = req.body;
        await userApp.createInfo({ instructor, username, session_no, lec_theme, lec_contents, supplement_items, class_date, next_class_date });
        res.status(CREATED).json({
            inputSuccess: true,
            message: '강의정보 등록 성공!'
        });
    } catch (error){
        res.status(BAD_REQUEST).json({
            message: "등록 실패!"
        });
    }
};

//강사 --> 강의 정보 조회 API
exports.getInfo = async (req, res, next) => {
    try{
        const { username, instructor } = req.params;
        const info = await userApp.getInfo({ username, instructor });
        res.status(OK).json({
            info,
            message: '강의정보 조회 성공!'
        });
    } catch (error){
        res.status(BAD_REQUEST).json({
            message: "조회 실패!"
        });
    }
};

//강사 --> 강의 상세정보 조회 API
exports.getDetailInfo = async (req, res, next) => {
    try{
        const instructor = req.user.lecturer_no;
        const { username, session_no } = req.params;
        const info = await userApp.getDetailInfo({instructor, username, session_no });
        res.status(OK).json({
            info,
            message: '강의상세정보 조회 성공!'
        });
    } catch (error){
        res.status(BAD_REQUEST).json({
            message: "조회 실패!"
        });
    }
};

//강사 --> 강의 정보 수정 API
exports.updateClassInfo = async (req, res, next) => {
    try{
        const instructor = req.user.lecturer_no;
        const { username, session_no } = req.params;
        const { lec_theme, lec_contents, supplement_items, class_date, next_class_date } = req.body
        const result = await userApp.updateInfo({instructor, username, session_no, lec_theme, lec_contents, supplement_items, class_date, next_class_date});
        
        if(result === 1){
            res.status(OK).json({
                updateSuccess: true,
                message: '강의 정보 수정 성공!'
            });
        } else {
            res.status(BAD_REQUEST).json({
                updateSuccess: false,
                message: '강의 정보 수정 실패!'
            })
        }
    } catch(error){
        next(error);
    }
};

//강사 --> 강의 기간 입력 API
exports.inputDateInfo = async (req, res, next) => {
    try{
        const instructor = req.user.lecturer_no;
        const { username, start_time, finish_time } = req.body;
        await userApp.createDateInfo({ instructor, username, start_time, finish_time });
        res.status(CREATED).json({
            inputSuccess: true,
            message: '강의기간 정보 등록 성공!'
        });
    } catch (error) {
        res.status(BAD_REQUEST).json({
            message: "등록 실패!"
        });
    }
};

//강사 --> 자신의 회원을 강습하는 두명의 강사이름 조회
exports.getCertainLecturer = async (req, res, next) => {
    try{
        const instructor = req.user.lecturer_no;

        const { username } = req.params;
        const lecturerList = await userApp.getCertainLecturer({ instructor, username });
        res.status(OK).json({
            list: lecturerList,
            message: '특정 강사 정보 조회 성공!'
        });
    } catch (error) {
        res.status(BAD_REQUEST).json({
            message: "조회 실패!"
        });
    }
};
