async function TeacherTable(pool) {
    try {
        // Create the teachers table
        await pool.query('CREATE TABLE IF NOT EXISTS teacher (teacher_id varchar(10) PRIMARY KEY,name VARCHAR(55) NOT NULL,phone_number VARCHAR(20) NOT NULL,address VARCHAR(255) NOT NULL,star_rating INT NOT NULL,reviewID VARCHAR(3),email varchar(20),designation VARCHAR(20),passwordhash VARCHAR(100))',function(err,result){
            if(err)throw err;
        });
    } catch (err) {
        console.error("Error initializing database:", err);
    }
}
// Call the function to initialize the database
module.exports=TeacherTable;