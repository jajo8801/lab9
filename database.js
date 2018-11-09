//pg-promise (pgp) is a Node.js package/library which allows you to 
//programmatically connect and run queries on a PostgreSQL database! 
//More information about this library in this link: 
//http://vitaly-t.github.io/pg-promise/index.html.
var pgp = require('pg-promise')();
var dbConfig = process.env.DATABASE_URL;
/*const dbConfig = {
   host: 'localhost',
   port: 5432,
   database: 'lab6',
   user: 'postgres',
   password: 'password'
};*/

var db = pgp(dbConfig);

module.exports = db;