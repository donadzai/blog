const express = require('express');
const router = express.Router();
const AccountController = require('../app/controllers/AccountController');

router.get('/', AccountController.loginDisplay);
router.get('/welcome', AccountController.welcomeDisplay);
router.post('/', AccountController.loginAction);

module.exports = router;
