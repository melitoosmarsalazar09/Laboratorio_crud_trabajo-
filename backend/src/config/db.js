const mysql = require('mysql2/promise');
const env = require('./env');

const pool = mysql.createPool({
    host: env.db.host,
    port: envdb.port,
    user: env.db.user,
    password: env.db.password,
    database:env.dbdatabase,
    waitForConnections: true,
    connectionLimit:10
});

module.exports = pool;
