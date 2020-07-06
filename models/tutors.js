'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tutors extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            tutors.hasMany(models.tutor_ratings, {
                foreignKey: "TutorId",
                as: "tutor_ratings"
            })
            tutors.hasMany(models.answering_questions, {
                foreignKey: "TutorId",
                as: "answering_questions"
            })
        }
    };
    tutors.init({
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        profilePic: DataTypes.STRING,
        subjects: DataTypes.ARRAY(DataTypes.STRING),
        grade: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'tutors',
    });
    return tutors;
};