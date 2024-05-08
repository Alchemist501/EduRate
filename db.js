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
        // Create or verify the existence of the database
        await pool.query('CREATE DATABASE IF NOT EXISTS COLLEGE');

        // Select the database for use
        await pool.query('USE COLLEGE');
        
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
    if(values != null){
        try{
            await pool.query(q,values,function(err,result){
                if(err) throw err;
                return result;
            });
        }catch(err) {
            throw err;
        }
    }else{
        try{
            await pool.query(q,function(err,result){
                if(err) throw err;
                console.log(result);
                const jsondata = JSON.stringify(result);
                console.log(jsondata);
                return result;
            });
        }catch(err) {
            throw err;
        }
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
exports.getTeacher = async(req,res,next)=>{
    let ID = req.params.id;
    let query = `SELECT * FROM COLLEGE.teacher WHERE teacher_id = "${ID}"`;
    pool.query(query, (error, results, fields) => {
        if (error) {
          throw error;
        }
      
        // Transform the query result into JSON format
        const jsonData = JSON.stringify(results);
      
        // Output the JSON data
        res.render('teacher',results);
        next();
});
}
exports.getStud = ()=>{
    let query = 'SELECT * FROM COLLEGE.teacher';
    pool.query(query, (error, results, fields) => {
        if (error) {
          throw error;
        }
      
        // Transform the query result into JSON format
        const jsonData = JSON.stringify(results);
        console.log(jsonData);
        // Output the JSON data
});
}
// module.exports =pool;                                                                                        