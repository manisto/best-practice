import * as Sequelize from 'sequelize';
import { BookAttributes } from '../../../models';
import { Associate } from './index';

export default (sequelize: Sequelize.Sequelize, types: Sequelize.DataTypes): BookModel => {
    let Book: BookModel = sequelize.define<BookInstance, BookAttributes>('book', {
        title: types.STRING,
    });

    Book.associate = (models) => {
        models.Book.belongsTo(models.Author);
    }

    return Book;
}

interface BookInstance extends Sequelize.Instance<BookAttributes> {}

export interface BookModel extends Associate<BookInstance, BookAttributes> {
}