const Sequelize = require('sequelize');

const database = new Sequelize('best-practice', null, null, {
    operatorsAliases: Sequelize.Op,
    dialect: 'sqlite',
    storage: './best-practice.sqlite'
});

module.exports = database;