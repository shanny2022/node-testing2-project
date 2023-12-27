import knex from 'knex';
import config from './knexfile.js';

const environment = process.env.NODE_ENV ?? 'development';
const configuration = config[environment];

const db = knex(configuration);

export default db;
