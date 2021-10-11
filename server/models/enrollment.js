module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        'enrollment',
        {
            no: {
                autoIncrement: true,
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
            },
        },
        {
            tableName: 'enrollment',
            timestamps: true,
            underscored: true,
        }
    );
};