"use strict";

const faker = require("faker");

exports.up = (queryInterface, Sequelize) => {
    let authors = [];
    let books = [];

    for (let i = 0; i < 10; i++) {
        let id = i + 1;
        let name = faker.name.findName();
        let createdAt = new Date();
        let updatedAt = new Date();

        authors.push({
            id,
            name,
            createdAt,
            updatedAt,
        });

        books.push({
            id,
            title: faker.company.catchPhrase(),
            authorId: id,
            createdAt: new Date(),
            updatedAt: new Date()
        });
    }

    return queryInterface.bulkInsert('authors', authors, {})
        .then(() => queryInterface.bulkInsert('books', books, {}));
};

exports.down = (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('books', null, {})
        .then(() => queryInterface.bulkDelete('authors', null, {}));
};