const { User } = require('../models');

exports.selectUserType = async (id) => {
    const results = await User.findOne({
        attributes: ['usertype'],
        where: {id},
    });
    return results;
}