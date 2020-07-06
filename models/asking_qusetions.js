'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class asking_qusetions extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            asking_qusetions.belongsTo(models.Students, {
                foreignKey: "StudentId",
                as: "Students"
            })
            asking_qusetions.hasMany(models.Doubts, {
                foreignKey: "QuestionId",
                as: "Doubts"
            })
            asking_qusetions.belongsTo(models.subjects, {
                foreignKey: "SujectId",
                as: "subjects"
            })
            asking_qusetions.belongsTo(models.classes, {
                foreignKey: "ClassId",
                as: "classes"
            })
            asking_qusetions.hasMany(models.answering_questions, {
                foreignKey: "AnswerId",
                as: "answering_qusetions"
            })
        }
    };
    asking_qusetions.init({
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
        modelName: 'asking_qusetions',
    });
    return asking_qusetions;
};
return asking_qusetions;
};