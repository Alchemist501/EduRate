async function reviewTable(pool) {
    try {
        // Create the review table
        await pool.query('CREATE TABLE IF NOT EXISTS review (review_id varchar(8),Student_name varchar(10),Teacher_name varchar(10) NOT NULL,review VARCHAR(100) NOT NULL,rating int(2) NOT NULL)');
    } catch (err) {
        console.error("Error initializing database:", err);
    }
}
module.exports = reviewTable;