const express = require('express');
const viewController = require('./../controllers/viewController');
const courseController =require('./../controllers/courseController');
const TeacherContoller = require('./../controllers/TeacherContoller');
const router = express.Router();
router.get('/',  viewController.getloginForm);
router.get('/forgotPassword',viewController.ForgotPassword);
router.route('/teacher/TDBMS').get(TeacherContoller.getTeacher);

router.use(courseController.getCourses);
router.get('/courses',viewController.getCourses);
module.exports = router;