'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Students extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Students.hasMany(models.asking_questions, {
                foreignKey: "StudentId",
                as: "asking_questions"
            })
            Students.hasMany(models.tutor_ratings, {
                foreignKey: "StudentId",
                as: "tutor_ratings"
            })
        }
    };
    Students.init({
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        profilePic: DataTypes.STRING,
        subjects: DataTypes.ARRAY(DataTypes.STRING),
        grade: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Students',
    });
    return Students;
};