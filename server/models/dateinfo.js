module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        'dateinfo',
        {
            date_no: {
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
            start_time: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
            finish_time: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
        },
        {
            tableName: 'dateinfo',
            timestamps: true,
            paranoid: true,
            underscored: true,
        }
    );
};