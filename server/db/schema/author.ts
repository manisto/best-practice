import * as sequelize from 'sequelize';
import { database } from '../database';

export const author = database.define<AuthorInstance, AuthorAttributes>('author', {
    name: sequelize.STRING,
});

export interface AuthorAttributes {
    id?: number;
    name: string;
}

interface AuthorInstance extends sequelize.Instance<AuthorAttributes> {}