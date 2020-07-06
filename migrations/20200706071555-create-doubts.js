'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Doubts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      QuesId: {
        type: Sequelize.INTEGER
      },
      doubt: {
        type: Sequelize.STRING
      },
      doubtImage: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      answer: {
        type: Sequelize.STRING
      },
      answerImage: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Doubts');
  }
};