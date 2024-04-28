const express = require('express');
const dbInit = require('./../db');
const reviewController = require('./../controllers/TeacherContoller');
const router = express.Router();
router.use(dbInit.dbInit);
// router.route('/addReview').post(reviewController.TeacherReview);
module.exports = router;