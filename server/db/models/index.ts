import { sequelize } from '../database';
import { BookModel } from './book';
import { AuthorModel } from './author';
import { ModelMap, ModelKeys } from './Associate';

let models = {
    Author: sequelize.import('./author') as AuthorModel,
    Book: sequelize.import('./book') as BookModel,
}

Object.keys(models).forEach((modelKey: ModelKeys) => {
    let model = models[modelKey];

    if (model.associate) {
        model.associate(models);
    }
});

export = models;