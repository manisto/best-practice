import * as sequelize from 'sequelize';
import { database } from '../database';
import { AuthorAttributes } from '../../../models';

export const author = database.define<AuthorInstance, AuthorAttributes>('author', {
    name: sequelize.STRING,
});

interface AuthorInstance extends sequelize.Instance<AuthorAttributes> {}