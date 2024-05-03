const express = require('express');
const viewController = require('./../controllers/viewController');
const courseController =require('./../controllers/courseController');
const router = express.Router();
router.get('/',  viewController.getloginForm);
router.get('/forgotPassword',viewController.ForgotPassword);
router.get('/courses',courseController.getCourses,viewController.getCourses);
module.exports = router;