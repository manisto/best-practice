const Sequelize = require('sequelize');
const database = require('../database');

const author = database.define('author', {
    name: Sequelize.STRING,
});

module.exports = author;