const pool = require('./../db');
// Initialize the database
const getDB=function(next){
    pool.query('CREATE DATABASE IF NOT EXISTS COLLEGE', function(err, result) {
    if (err) throw err;
    console.log("Database COLLEGE created successfully");
    });
    next();
}
const useDB = function(){
    pool.query('USE COLLEGE', function(err, result) {
        if (err) throw err;
        console.log("USING COLLEGE NOW !!!");
    });
}