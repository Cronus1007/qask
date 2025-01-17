'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('asking_questions', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            SubjectId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "subjects",
                    key: "id"
                }
            },
            notes: {
                type: Sequelize.STRING
            },
            link: {
                type: Sequelize.STRING
            },
            StudentId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Students",
                    key: "id"
                }
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
                type: Sequelize.INTEGER,
                references: {
                    model: "classes",
                    key: "id"
                }
            },
            AnswerId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "answering_questions",
                    key: "id"
                }
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
        await queryInterface.dropTable('asking_qusetions');
    }
};