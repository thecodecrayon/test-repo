const authController = require('../controllers/authController');
const express = require('express');
const router = express.Router();

// ROUTES 
router.post('/login', authController.login);
router.post('/signup', authController.signup);

module.exports = router;