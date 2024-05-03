const bcrypt = require('bcrypt');
const QueryExecution = require('./../db').Query;

exports.addTeacher = async (req, res, next) => {   
  try {
    console.log(req.body);
    const teacher_id = req.body.teacher_id;
    const name = req.body.name;
    const phone_number = req.body.phone_number;
    const address = req.body.address;
    const star_rating = req.body.star_rating;
    const reviewID = req.body.reviewID;
    const email = req.body.email;
    const designation = req.body.designation;
    const password = req.body.passwordhash;
    console.log(password);
    // Hash the password
    const hash = await bcrypt.hash(password, 10);
    console.log('Hashed password:', hash);
    // Now you can save the hashed password to your database
    const query = 'INSERT INTO teacher (teacher_id, name, phone_number, address, star_rating, reviewID, email, designation, passwordhash) VALUES (?,?,?,?,?,?,?,?,?)';
    const values = [teacher_id, name, phone_number, address, star_rating, reviewID, email, designation, hash];
    await QueryExecution.Query(query, values);
    res.status(200).json({
      status: "success",
      message: "Query executed!!!"
    });
    next();
  } catch (err) {
  // Error handling
    console.error('Error:', err);
    res.status(500).json({
      status: "error",
      message: "Internal server error"
    });
  }
}