const pool = require('./../db');
// Initialize the database
const getDB=
    pool.query('CREATE DATABASE IF NOT EXISTS COLLEGE', function(err, result) {
    if (err) throw err;
    console.log("Database COLLEGE created successfully");
    });
const useDB = 
    pool.query('USE COLLEGE', function(err, result) {
        if (err) throw err;
        console.log("USING COLLEGE NOW !!!");
    });