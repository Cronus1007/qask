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