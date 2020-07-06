'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doubts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Doubts.init({
    QuesId: DataTypes.INTEGER,
    doubt: DataTypes.STRING,
    doubtImage: DataTypes.ARRAY(DataTypes.STRING),
    answer: DataTypes.STRING,
    answerImage: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    sequelize,
    modelName: 'Doubts',
  });
  return Doubts;
};