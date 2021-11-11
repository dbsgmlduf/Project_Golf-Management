const db = require('./db/user');

//사용자 --> 회원가입
exports.registerUser = async (data) => {
    const userInfo = await db.createUser(data);
    return userInfo;
};


