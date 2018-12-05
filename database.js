var pgp = require('pg-promise')();

var dbConfig = process.env.DATABASE_URL;

// Uncomment the below piece of code when running on Local
// const dbConfig = {
//     host: 'localhost',
//     port: 5432,
//     database: 'lab6',
//     user: 'postgres',
//     password: ''
// };

var db = pgp(dbConfig);

module.exports = db;