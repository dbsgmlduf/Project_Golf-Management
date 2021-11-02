const userApp = require('../../application/user');

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