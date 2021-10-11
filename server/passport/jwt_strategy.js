const { ExtractJwt } = require('passport-jwt');
const db = require('../models/user');

const JWTConfig = {
    jwtFromRequest: ExtractJwt.fromHeader(),
    secretOrKey: process.env.JWT_ACCESS_TOKEN_SECRET,
}

const JWTVerify = async(jwtPayload, done) => {
    try{
        const user = await db.findOne({where: {id:jwtPayload.id}});
        if(user){
            done(null, user);
        }
        done(null, false, {reason: "FUCKING AUTH!"});
    } catch(error){
        console.error(error);
        done(error);
    }
};

module.exports = { JWTConfig, JWTVerify };