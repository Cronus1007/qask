'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tutor_ratings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tutor_ratings.init({
    TutorId: DataTypes.INTEGER,
    StudentId: DataTypes.INTEGER,
    Comments: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tutor_ratings',
  });
  return tutor_ratings;
};