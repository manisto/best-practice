import * as Sequelize from 'sequelize';
import { BookAttributes } from '../../../models';
import { Associable } from './index';

export default (sequelize: Sequelize.Sequelize, types: Sequelize.DataTypes) => {
    let Book: BookModel = sequelize.define<BookInstance, BookAttributes>('book', {
        title: types.STRING,
    });

    Book.associate = (models) => {
        Book.belongsTo(models.Author);
    }

    return Book;
}

interface BookInstance extends Sequelize.Instance<BookAttributes> {}

export interface BookModel extends Associable<BookInstance, BookAttributes> {}