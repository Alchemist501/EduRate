const mysql = require('mysql');
const dotenv = require('dotenv');
const teacher = require('./models/TeacherModel');
const student = require('./models/StudentModel');
const reviewTable = require('./models/reviewModel');
const courseTable = require('./models/courseTable');
dotenv.config({ path: './config.env' });
// Create a MySQL connection pool
const pool = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});
exports.dbInit=async function initializeDatabase(req,res,next) {
    try {
        console.log("hiii");
        // Create or verify the existence of the database
        await pool.query('CREATE DATABASE IF NOT EXISTS COLLEGE');
        console.log("Database COLLEGE created successfully");

        // Select the database for use
        await pool.query('USE COLLEGE');
        console.log("USING COLLEGE NOW !!!");
        
        await teacher(pool);
        await student(pool);
        await reviewTable(pool);
        await courseTable(pool);
        next();
    } catch (err) {
        console.error("Error initializing database:", err);
    }
}
exports.Query=async function Query (q,values){
    try{
        console.log("hiii");
        console.log(q,values);
        await pool.query(q,values,function(err,result){
            if(err) throw err;
            console.log("Query executed");
            console.log(result);
            return result;
        });
    }catch(err) {
        throw err;
    }
} 
exports.login =(req,res)=>{
    let username = req.body.username;
    let password = req.body.password;
    // Ensure the input fields exists and are not empty
    if (username && password) {
    // Execute SQL query that'll select the account from the database based on the specified username and password
        pool.query('SELECT * FROM teacher WHERE teacher_id = ? AND passwordhash = ?', [username, password], function(error, results, fields) {
            // If there is an issue with the query, output the error
            if (error) throw error;
            // If the account exists
            if (results.length > 0) {
            // Authenticate the user
                req.session.loggedin = true;
                req.session.username = username;
                // Redirect to home page
                res.redirect('/courses');
            } else {
                res.send('Incorrect Username and/or Password!');
            }			
                res.end();
        });
    } else {
        res.send('Please enter Username and Password!');
        res.end();
    }
}
// module.exports =pool;                                                                                        