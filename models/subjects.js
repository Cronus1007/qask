'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class subjects extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            subjects.hasMany(models.asking_questions, {
                foreignKey: "SubjectId",
                as: "asking_questions"
            })
        }
    };
    subjects.init({
        subjectName: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'subjects',
    });
    return subjects;
};