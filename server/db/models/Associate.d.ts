import Sequelize = require('sequelize');
import models = require('./');

export type ModelMap = typeof models;
export type ModelKeys = keyof ModelMap;

export interface Associate<TInstance, TAttributes> extends Sequelize.Model<TInstance, TAttributes> {
    associate?(models: ModelMap): void;
}