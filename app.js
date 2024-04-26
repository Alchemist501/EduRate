const mysql = require('mysql');
const express = require('express');
const dotenv = require('dotenv');
const db = require('./models/StudentModel');
const app = express();
dotenv.config({ path: './config.env' });

// Create the connection pool
const pool = mysql.createPool({
    connectionLimit: 10, // Adjust as per your requirements
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

// Initialize the database
db.getDB(pool);

// Start the server
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
