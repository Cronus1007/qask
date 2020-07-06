'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('asking_qusetions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      SubjectId: {
        type: Sequelize.INTEGER
      },
      notes: {
        type: Sequelize.STRING
      },
      link: {
        type: Sequelize.STRING
      },
      StudentId: {
        type: Sequelize.INTEGER
      },
      quesName: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      audio: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      ClassId: {
        type: Sequelize.INTEGER
      },
      AnswerId: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('asking_qusetions');
  }
};