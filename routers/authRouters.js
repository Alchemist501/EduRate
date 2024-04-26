const express = require('express');
const authcontroller = require('./../controllers/authcontroller');
const dbInit = require('./../db');
const router = express.Router();
router.use(dbInit.dbInit);
router.route('/login').post(authcontroller.login);
router.route('/addTeacher').post(authcontroller.addTeacher);
module.exports = router;