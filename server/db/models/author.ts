import * as Sequelize from 'sequelize';
import { AuthorAttributes } from '../../../models';
import { Associate } from './index';

export default (sequelize: Sequelize.Sequelize, types: Sequelize.DataTypes) => {
    let Author: AuthorModel = sequelize.define<AuthorInstance, AuthorAttributes>('author', {
        name: types.STRING,
    });

    Author.associate = (models) => {
        models.Author.hasMany(models.Book);
    }

    return Author;
} 

interface AuthorInstance extends Sequelize.Instance<AuthorAttributes> {}

export interface AuthorModel extends Associate<AuthorInstance, AuthorAttributes> {
}