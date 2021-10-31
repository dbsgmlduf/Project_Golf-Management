module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        'enrollment',
        {
            enroll_no: {
                autoIncrement: true,
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
            },
            lecturer_no: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
            learner_no: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
        },
        {
            tableName: 'enrollment',
            timestamps: true,
            paranoid: true,
            underscored: true,
        }
    );
};