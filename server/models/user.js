module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User',
        {
            usertype: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING(30),
                allowNull: false,
                primaryKey: true,
            },
            password: {
                type: DataTypes.STRING(100),
                allowNull: false,
            }
        },
        {
            timestamps: false,
            tableName: 'User',
        }
    );
    return User;
};