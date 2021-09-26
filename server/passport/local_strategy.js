const bcrypt = require('bcrypt');
const db = require('../models/user');

const localConfig = { usernameField: 'email', passwordField: 'password' };

const localVerify = async(email, password, done) => {
    try{
        const user = await db.findOne({where: {email: email} });
        if(!user){
            return done(null, false, {message: "NO FUCKING USER!"});
        }
        const compareResult = await bcrypt.compare(password, user.password);
        if(!compareResult){
            return done(null, false, {message: "FUCKING WRONG PASSWORD!"});
        }
        return done(null, user);
    } catch(error){
        console.error(error);
        return done(null);
    }
};

module.exports = { localConfig, localVerify };