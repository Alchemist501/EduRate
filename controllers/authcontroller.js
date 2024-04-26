const bcrypt = require('bcrypt');
const AppError = require('./../utils/AppError');
const QueryExecution = require('./../db').Query;
exports.login = async (req, res, next) => {
  try {
    console.log("hii");
      const email = req.body.email;
      const password = req.body.password; 
      if (!email || !password)
        return next(new AppError('Please provide email and password ', 400)); //To check whether the email and password exists
      const user = await User.findOne({ email: email }).select('+password'); //email:email is same as{email} & + is used bcuz default selection of password is false => To check the user exists and password is correct
      if (!user || !(await user.correctPassword(password, user.password))) {
        //Instance method)
        return next(new AppError('Invalid mail-id or password', 401));
      }
      console.log(user);
      createSendToken(user, 200, res); //If everything is ok , send token to the client .
    } catch (err) {
      res.status(400).json({
        status: 'failed',
        error: err,
      });
    }
  };
  exports.addTeacher = async (req, res, next) => {
    
    try {
      console.log(req.body.teacher_id);
  
      const teacher_id = req.body.teacher_id;
      const name = req.body.name;
      const phone_number = req.body.phone_number;
      const address = req.body.address;
      const star_rating = req.body.star_rating;
      const reviewID = req.body.reviewID;
      const email = req.body.email;
      const designation = req.body.designation;
      const password = req.body.password;
  
      // Hash the password
      const hash = await bcrypt.hash(password, 10);
      console.log('Hashed password:', hash);
  
      // Now you can save the hashed password to your database
      const query = 'INSERT INTO teacher (teacher_id, name, phone_number, address, star_rating, reviewID, email, designation, passwordhash) VALUES (?,?,?,?,?,?,?,?,?)';
      const values = [teacher_id, name, phone_number, address, star_rating, reviewID, email, designation, hash];
      
      // Assuming QueryExecution is a function that executes the query
      await QueryExecution(query, values);
      
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
  