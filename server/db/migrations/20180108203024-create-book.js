"use strict";

exports.up = (queryInterface, Sequelize) => {
    return queryInterface.createTable('books', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        title: {
            type: Sequelize.STRING
        },
        authorId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'authors',
                key: 'id'
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
};

exports.down = (queryInterface, Sequelize) => {
    return queryInterface.dropTable('authors');
};