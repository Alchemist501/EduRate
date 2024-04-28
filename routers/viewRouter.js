const express = require('express');
const viewController = require('./../controllers/viewController');
const router = express.Router();
router.get('/',  viewController.getloginForm);
router.get('/forgotPassword',viewController.ForgotPassword);
module.exports = router;