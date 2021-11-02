const db = require('./db/user');

exports.registerUser = async (data) => {
    const userInfo = await db.createUser(data);
    return userInfo;
};

exports.getLecturerList = async () => {
    const list = await db.selectAllLecturer();
    return list;
}


