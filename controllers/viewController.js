const db = require('./../db');
exports.getloginForm = (req, res) => {
    res.status(200).render('login', {
      title: 'Log into the account',
    });
};
exports.ForgotPassword = (req, res) => {
    res.status(200).render('forgotPassword', {
      title: 'ForgotPassword',
    });
};
exports.getCourses = (req,res,next)=>{
  let Courses = req.body.Courses;
  res.status(200).render('course',{
    title:'Courses',
    Courses
  });
  next();
}
exports.getattendance = (req,res,next)=>{
  res.status(200).render('attendance');
  next();
};
exports.getStudents = (req,res,next)=>{
  db.getStud();
  res.status(200).render('student');
  next();
}