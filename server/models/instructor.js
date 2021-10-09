module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        'instructor',
        {
            no: {
                autoIncrement: true,
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
            },
            usertype: {
                type: DataTypes.STRING(10),
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
            nickname: {
                type: DataTypes.STRING(40),
                allowNull: false,
            },
            confirm_auth: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
        },
        {
            tablename: 'instructor',
            timestamps: false,
        }
    );
};