"use strict";

exports.up = (queryInterface, Sequelize) => {
    return queryInterface.createTable('authors', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.STRING
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