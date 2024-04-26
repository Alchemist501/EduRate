const mysql = require('mysql');
const dotenv = require('dotenv');
const teacher = require('./models/TeacherModel');
const student = require('./models/StudentModel');
dotenv.config({ path: './config.env' });
// Create a MySQL connection pool
const pool = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});
exports.dbInit=async function initializeDatabase() {
    try {
        // Create or verify the existence of the database
        await pool.query('CREATE DATABASE IF NOT EXISTS COLLEGE');
        console.log("Database COLLEGE created successfully");

        // Select the database for use
        await pool.query('USE COLLEGE');
        console.log("USING COLLEGE NOW !!!");
        
        await teacher(pool);
        await student(pool);
    } catch (err) {
        console.error("Error initializing database:", err);
    }
}
exports.Query=async function Query (q,values){
    try{
        console.log("hiii");
        pool.query(q,values);
        console.log("Query executed");
    }catch(err) {
        throw err;
    }
}