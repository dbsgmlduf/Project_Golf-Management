const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const { Strategy: JWTStrategy } = require('passport-jwt');

const { localConfig, localVerify } = require('./local_strategy');
const { JWTConfig, JWTVerify } = require('./jwt_strategy');

module.exports = () => {
    passport.use('local', new LocalStrategy(localConfig, localVerify));
    passport.use('jwt', new JWTStrategy(JWTConfig, JWTVerify));
};