'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class asking_questions extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            asking_questions.belongsTo(models.Students, {
                foreignKey: "StudentId",
                as: "Students"
            })
            asking_questions.hasMany(models.Doubts, {
                foreignKey: "QuesId",
                as: "Doubts"
            })
            asking_questions.belongsTo(models.subjects, {
                foreignKey: "SubjectId",
                as: "subjects"
            })
            asking_questions.belongsTo(models.classes, {
                foreignKey: "ClassId",
                as: "classes"
            })
            asking_questions.hasMany(models.answering_questions, {
                foreignKey: "AnswerId",
                as: "answering_questions"
            })
        }
    };
    asking_questions.init({
        SubjectId: DataTypes.INTEGER,
        notes: DataTypes.STRING,
        link: DataTypes.STRING,
        StudentId: DataTypes.INTEGER,
        quesName: DataTypes.STRING,
        description: DataTypes.STRING,
        audio: DataTypes.STRING,
        image: DataTypes.ARRAY(DataTypes.STRING),
        ClassId: DataTypes.INTEGER,
        AnswerId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'asking_questions',
    });
    return asking_questions;
};