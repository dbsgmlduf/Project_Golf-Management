const { Lecturer } = require(".");

module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        'learner',
        {
            learner_no: {
                autoIncrement: true,
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
            },
            usertype: {
                type:DataTypes.STRING(10),
                allowNull: false,
            },
            username: {
                type: DataTypes.STRING(40),
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            id: {
                type: DataTypes.STRING(50),
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
        },
        {
            tableName: 'learner',
            timestamps: true,
            paranoid: true,
            underscored: true,
        }
    );
};