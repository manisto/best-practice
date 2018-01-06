import * as Sequelize from 'sequelize';
import { BookAttributes } from '../../../models';
import { Author } from './';

export default (sequelize: Sequelize.Sequelize, types: Sequelize.DataTypes) => {
    let Book = sequelize.define<BookInstance, BookAttributes>('book', {
        title: types.STRING,
    });

    (Book as any).associate = () => {
        Book.belongsTo(Author);
    }

    return Book;
}

interface BookInstance extends Sequelize.Instance<BookAttributes> {}

export interface BookModel extends Sequelize.Model<BookInstance, BookAttributes>{}