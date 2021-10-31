const db = require('./db/user');

exports.registerUser = async (data) => {
    const userInfo = await db.createUser(data);
    return userInfo;
};



