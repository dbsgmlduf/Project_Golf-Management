const { hashingPw } = require('../../utils/bcrypt');
const { Lecturer, Learner, sequelize } = require('../../models');
const { selectUserTypeFromPassport } = require('../db/check');

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
            attributes: ['usertype', 'lecturer_no','username','id','password'],
            where: {id},
        });
        return results;
    }
    else if(!usertype['usertype']){
        const results = await Learner.findOne({
            attributes: ['usertype','learner_no','username','id','password'],
            where: {id},
        });
        return results;
    }
};
