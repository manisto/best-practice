import * as Sequelize from 'sequelize';
import { AuthorAttributes } from '../../../models';
import { Book } from './index';

export default (sequelize: Sequelize.Sequelize, types: Sequelize.DataTypes) => {
    let Author = sequelize.define<AuthorInstance, AuthorAttributes>('author', {
        name: types.STRING,
    });

    (Author as any).associate = () => {
        Author.hasMany(Book);
    }

    return Author;
} 

interface AuthorInstance extends Sequelize.Instance<AuthorAttributes> {}

export interface AuthorModel extends Sequelize.Model<AuthorInstance, AuthorAttributes> {}