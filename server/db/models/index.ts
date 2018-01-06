import { sequelize } from '../database';
import { AuthorModel } from './author';
import { BookModel } from './book';

export const Author = sequelize.import('./author') as AuthorModel;
export const Book = sequelize.import('./book') as BookModel;

Object.keys(sequelize.models).forEach((key) => {
    let model: any = sequelize.models[key];

    if (model.associate) {
        model.associate();
    }
});