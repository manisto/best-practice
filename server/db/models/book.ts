import * as sequelize from 'sequelize';
import { database } from '../database';
import { author } from './author';
import { BookAttributes } from '../../../models';

export const book = database.define<BookInstance, BookAttributes>('book', {
    title: sequelize.STRING,
});

interface BookInstance extends sequelize.Instance<BookAttributes> {}

book.belongsTo(author);
author.hasMany(book);