'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class answering_questions extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // answering_questions.belongsTo(models.asking_questions, {
            //     foreignKey: "AnswerId",
            //     as: "asking_questions"
            // })
            answering_questions.belongsTo(models.tutors, {
                foreignKey: "TutorId",
                as: "tutors"
            })
        }
    };
    answering_questions.init({
        stepOne: DataTypes.STRING,
        stepTwo: DataTypes.STRING,
        stepThree: DataTypes.STRING,
        TutorId: DataTypes.INTEGER,
        quesName: DataTypes.STRING,
        explanation: DataTypes.STRING,
        example: DataTypes.STRING,
        files: DataTypes.ARRAY(DataTypes.STRING),
        audio: DataTypes.ARRAY(DataTypes.STRING)
    }, {
        sequelize,
        modelName: 'answering_questions',
    });
    return answering_questions;
};