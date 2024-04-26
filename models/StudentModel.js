const con = require('./../app');
exports.getDB = async function(req,res,next){
    try{
        await con.query(
            'CREATE DATABASE IF NOT EXISTS COLLEGE'
        )
        console.log('Connected to database COLLEGE')
        next();
    }catch(err){
       throw err;
    }
}
exports.createUserTable=async function () {
    const connection = await 
    pool.getConnection();
    try {
        // Create user table
        await connection.query(`
            CREATE TABLE IF NOT EXISTS Student (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(255) NOT NULL,
                password VARCHAR(255) NOT NULL
            )
        `);
        console.log('User table created successfully');
    } catch (error) {
        console.error('Error creating user table:', error);
    } finally {
        connection.release();
    }
}