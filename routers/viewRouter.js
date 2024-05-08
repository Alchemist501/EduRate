const express = require('express');
const viewController = require('./../controllers/viewController');
const courseController =require('./../controllers/courseController');
const TeacherContoller = require('./../controllers/TeacherContoller');
const dB = require('./../db');
const router = express.Router();
router.get('/',  viewController.getloginForm);
router.get('/forgotPassword',viewController.ForgotPassword);
router.get('/teacher/:id',TeacherContoller.getTeacher);
router.get('/students',viewController.getStudents);
router.get('/attendance',viewController.getattendance);

router.use(courseController.getCourses);
router.get('/courses',viewController.getCourses);
module.exports = router;