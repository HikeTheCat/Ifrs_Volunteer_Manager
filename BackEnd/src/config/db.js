const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.congfig();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForCOnnections: true,
    connectionLimit: 10,
    queueLimit: 0

});

module.exports = promisePool;
