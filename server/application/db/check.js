const { Lecturer, Learner } = require('../../models');

//lecturer모델에서 id 탐색 실패시 false반환
exports.selectUserTypeFromPassport = async(id) => {
    const result = await Lecturer.findOne({
        attributes: ['usertype'],
        where: {id},
    });
    if(result === null){
        return false;
    }
    return result;
};

//사용자 유형에 맞는 사용자 번호 추출(일반 사용자)
exports.selectLecturerNo = async({ username }) => {
    console.log(username);
    const no = await Lecturer.findAll({
        attributes: ['lecturer_no'],
        where: { username }
    })
    const tmp = JSON.parse(JSON.stringify(no));
    const result = tmp[0].lecturer_no;
    return result;
};

//사용자 유형에 맞는 사용자 번호 추출(강사)
exports.selectLearnerNo = async({ username }) => {
    const no = await Learner.findAll({
        attributes: ['learner_no'],
        where: { username }
    });
    const tmp = JSON.parse(JSON.stringify(no));
    const result = tmp[0].learner_no;
    return result;
};