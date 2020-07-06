'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('answering_questions', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            stepOne: {
                type: Sequelize.STRING
            },
            stepTwo: {
                type: Sequelize.STRING
            },
            stepThree: {
                type: Sequelize.STRING
            },
            TutorId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Tutors",
                    key: "id"
                }
            },
            quesName: {
                type: Sequelize.STRING
            },
            explanation: {
                type: Sequelize.STRING
            },
            example: {
                type: Sequelize.STRING
            },
            files: {
                type: Sequelize.ARRAY(Sequelize.STRING)
            },
            audio: {
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
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('answering_questions');
    }
};