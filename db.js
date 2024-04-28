const mysql = require('mysql');
const dotenv = require('dotenv');
const teacher = require('./models/TeacherModel');
const student = require('./models/StudentModel');
const reviewTable = require('./models/reviewModel');
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
exports.loginQuery = async function(query,values){
    console.log(query);
    console.log(values);
    await pool.query(query,function(err,results,fields){
        if(results.length>0){
            console.log("Welcome!!!");
            return true;
        }else{
            console.log("User Not Found!!!");
            return false;
        }
    })
}                                                                                          