import * as sequelize from 'sequelize';
import { database } from '../database';
import { author } from './author';

export const book = database.define<BookInstance, BookAttributes>('book', {
    title: sequelize.STRING,
});

export interface BookAttributes {
    id?: number;
    title: string;
    authorId: number;
}

interface BookInstance extends sequelize.Instance<BookAttributes> {}

book.belongsTo(author);
author.hasMany(book);