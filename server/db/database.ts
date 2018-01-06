import * as Sequelize from 'sequelize';

let options: Sequelize.Options = {
    operatorsAliases: false,
    dialect: 'sqlite',
    storage: './best-practice.sqlite'
};

export const sequelize = new Sequelize('best-practice', null, null, options);