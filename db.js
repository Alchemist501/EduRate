const mysql = require('mysql');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config({ path: './config.env' });

// Create a MySQL connection pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

module.exports = pool;
