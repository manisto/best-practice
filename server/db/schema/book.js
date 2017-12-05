const Sequelize = require('sequelize');
const database = require('../database');
const author = require('./author');

const book = database.define('book', {
    title: Sequelize.STRING,
});

book.belongsTo(author);
author.hasMany(book);

module.exports = book;