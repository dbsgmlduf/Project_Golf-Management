const {hashingPw} = require('../../utils/bcrypt');
const {Lecturer, Learner, sequelize} = require('../../models');

exports.createUser = async({usertype, username, email, id, password}) => {
    const userInfo = {
        usertype: usertype,
        username: username,
        email: email,
        id: id,
        password: await hashingPw(password),
    };
    if(usertype === 'lecturer'){
        const results = await Lecturer.create(userInfo);
        return results;
    }
    if(usertype === 'learner'){
        const results = await Learner.create(userInfo);
        return results;
    }
};

exports.selectUser = async (id) => {
    const usertype = await selectUserTypeFromPassport(id);
    if(usertype['usertype'] === 'lecturer'){
        const results = await Lecturer.findOne({
            attributes: ['lecturer_no','username','password'],
            where: {id},
        });
        return results;
    }
    else if(!usertype['usertype']){
        const results = await Learner.findOne({
            attributes: ['learner_no','username','password'],
            where: {id},
        });
        return results;
    }
};

//lecturer에서 id 탐색 실패시 false반환
const selectUserTypeFromPassport = async (id) => {
    const results = await Lecturer.findOne({
        attributes: ['usertype'],
        where: {id},
    });
    if(results === null){
        return false;
    }
    return results;
}

exports.checkUserType = async (id) => {
    const results = await Lecturer.findOne({
        attributes: ['usertype'],
        where: {id},
    });
    if(results === null){
        return false;
    }
    return results;
}

exports.selectAllLecturer = async () => {
    const results = await Lecturer.findAll({
        attributes: ['username'],
    });
    return results;
}