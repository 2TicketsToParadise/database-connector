var pgp = require('pg-promise')();

// const dbConfig = {
//     host: 'localhost',
//     port: 5432,
//     database: 'lab6',
//     user: 'postgres',
//     password: ''
// };

var dbConfig = process.env.DATABASE_URL;

var db = pgp(dbConfig);

module.exports = db;