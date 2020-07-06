'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class classes extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            classes.hasMany(models.asking_qusetions, {
                foreignKey: "ClassId",
                as: "asking_qusetions"
            })
        }
    };
    classes.init({
        class: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'classes',
    });
    return classes;
};