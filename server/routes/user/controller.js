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
        console.log(user);
        const accessToken = createJwtAccessToken(user.id);
        const userType = await checkUserType(user.id);
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
