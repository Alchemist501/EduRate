exports.login = async (req, res, next) => {
  try {
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