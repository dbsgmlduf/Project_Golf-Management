const {User} = require('../../models');
const bcrypt = require('bcrypt');

const userApp = require('../../application/user');
const {createJwtAccessToken} = require('../../utils/jwt');
//const {selectUserType} = require('../../application/user');

/* Sign Up API */
exports.register = async (req, res, next) => {
    try{
        const { usertype, email, id, password, nickname, confirm_auth } = req.body;
        const hash = await bcrypt.hash(password, 10);
        await User.create({
            usertype: usertype,
            email: email,
            id: id,
            password: hash,
            nickname: nickname,
            confirm_auth: confirm_auth,
        });
        res.json("INSTRUCTOR REGISTER SUCCESS!!");
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
        const userType = await userApp.selectUserType(user.id);
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
