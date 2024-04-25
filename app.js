const mysql = require('mysql');
const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config({ path: './config.env' });
const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`App running on port ${port}`);
});