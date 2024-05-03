async function courseTable(pool) {
    try {
        // Create the review table
        await pool.query('CREATE TABLE IF NOT EXISTS Courses (course_id varchar(8) primary key,Name varchar(10) NOT NULL,Teacher_ID varchar(10) NOT NULL,EnrolledStudents int(3),constraint fk foreign key (Teacher_ID) references teacher(teacher_id))');
        console.log("Course Table created!!");
    } catch (err) {
        console.error("Error initializing database:", err);
    }
}
module.exports = courseTable;