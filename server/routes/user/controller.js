const userApp = require('../../application/user');
const {checkUserType} = require('../../application/db/user');
const {createJwtAccessToken} = require('../../utils/jwt');

/* Sign Up API */
exports.register = async (req, res, next) => {
    try{
        const { usertype, username, email, id, password } = req.body;
        await userApp.registerUser({usertype, username, email, id, password});
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

/* Sign In API */
exports.login = async (req, res, next) => {
    try{
        const user = req.body;
        const accessToken = createJwtAccessToken(user.id);
        const userType = await checkUserType(user.id);
        console.log("사용자유형", typeof userType);
        console.log("사용자유형", userType);
        res.json({
            loginSuccess: true,
            message: 'LOGIN SUCCESS!!',
            accessToken,
            userType: userType
        });
    } catch(error){
        res.status(400).json({
            message: "TRY AGAIN!"
        });
    }
}

exports.list = async (req, res, next) => {
    try{
        const lecturerList = await userApp.getLecturerList();
        res.json({
            list: lecturerList,
            //accessToken,
        });
    } catch(error){
        res.status(400).json({
            message: "TRY AGAIN!"
        });
    }
}
