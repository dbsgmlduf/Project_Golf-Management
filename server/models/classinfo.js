module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        'classinfo',
        {
            no: {
                autoIncrement: true,
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
            },
            // lecturer_id: {
            //     type: DataTypes.BIGINT,
            //     allowNull: false,
            // },
            // learner_id: {
            //     type: DataTypes.BIGINT,
            //     allowNull: false,
            // },
            session_no: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            lec_theme: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            lec_contents: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            supplement_item: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            class_date: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
            next_class_date: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
        },
        {
            tableName: 'classinfo',
            timestamps: true,
            paranoid: true,
            underscored: true,
        }
    );
};