const pool = require('./../db');
const bcrypt = require('bcrypt');
async function StudentTable(pool) {
    try {
        // Create the students table
        await pool.query('CREATE TABLE IF NOT EXISTS students (student_id varchar(5) PRIMARY KEY, name VARCHAR(55) NOT NULL, phone_number VARCHAR(20) NOT NULL,email VARCHAR(30) NOT NULL,address VARCHAR(100) NOT NULL,password VARCHAR(200) NOT NULL)');
        console.log("Student Table created!!");
    } catch (err) {
        console.error("Error initializing database:", err);
    }
}
module.exports = StudentTable;