import * as sequelize from 'sequelize';

let options: sequelize.Options = {
    operatorsAliases: sequelize.Op,
    dialect: 'sqlite',
    storage: './best-practice.sqlite'
};

export const database = new sequelize('best-practice', null, null, options);