import * as Sequelize from 'sequelize';
import { sequelize } from '../database';
import { BookModel } from './book';
import { AuthorModel } from './author';

export interface ModelMap {
    Author: AuthorModel;
    Book: BookModel;
}

export interface Associate<TInstance, TAttributes> extends Sequelize.Model<TInstance, TAttributes> {
    associate?(models: ModelMap): void;
}

let models = {} as ModelMap;

export const Author = models.Author = sequelize.import('./author') as AuthorModel;
export const Book = models.Book = sequelize.import('./book') as BookModel;

type ModelKeys = keyof ModelMap;

Object.keys(models).forEach((modelName: ModelKeys) => {
    let model = models[modelName];

    if (model.associate) {
        model.associate(models);
    }
})