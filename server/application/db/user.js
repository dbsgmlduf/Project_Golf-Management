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
    else if(usertype === 'learner'){
        const results = await Learner.create(userInfo);
        return results;
    }
};

exports.selectUser = async (id) => {
    const usertype = await selectUserType(id);
    console.log("사용자유형==",usertype['usertype']);
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
const selectUserType = async (id) => {
    const results = await Lecturer.findOne({
        attributes: ['usertype'],
        where: {id},
    });
    if(results === null){
        return false;
    }
    return results;
}

