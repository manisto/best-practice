import * as Sequelize from 'sequelize';
import { sequelize } from '../database';
import { AuthorModel } from './author';
import { BookModel } from './book';
import * as models from '.';

export const Author = sequelize.import('./author') as AuthorModel;
export const Book = sequelize.import('./book') as BookModel;

type ModelMap = typeof models;
type ModelKeys = keyof ModelMap;

export interface Associable<TInstance, TAttributes> extends Sequelize.Model<TInstance, TAttributes> {
    associate?(models: ModelMap): void;
}

Object.keys(models).forEach((key: ModelKeys) => {
    let model = models[key];

    if (model.associate) {
        model.associate(models);
    }
});