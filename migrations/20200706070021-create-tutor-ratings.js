'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('tutor_ratings', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            TutorId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Tutors",
                    key: "id"
                }
            },
            StudentId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Students",
                    key: "id"
                }
            },
            Comments: {
                type: Sequelize.STRING
            },
            rating: {
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
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('tutor_ratings');
    }
};