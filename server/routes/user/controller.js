const { CREATED, BAD_REQUEST } = require('../../config/statusCode').statusCode;
const userApp = require('../../application/user');
const { createJwtAccessToken } = require('../../utils/jwt');

//사용자 --> 회원가입 API
exports.register = async (req, res, next) => {
    try{
        const { usertype, username, email, id, password } = req.body;
        await userApp.registerUser({usertype, username, email, id, password});
        res.status(CREATED).json({
            registerSuccess: true,
            message: '회원가입 성공!'
        });
    } catch (error){
        res.status(BAD_REQUEST).json({
            message: "회원가입 실패!"
        });
    }
};

//사용자 --> 로그인 API
exports.login = async (req, res, next) => {
    try{
        const user = req.body;
        const userType = req.user.usertype;
        const accessToken = createJwtAccessToken(user.id);
        res.status(CREATED).json({
            loginSuccess: true,
            message: '로그인 성공!',
            accessToken,
            userType: userType
        });
    } catch(error){
        res.status(BAD_REQUEST).json({
            message: "로그인 실패!"
        });
    }
};


