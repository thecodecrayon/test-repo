const blogController = require('../controllers/blogController');
const express = require('express');
const router = express.Router();

// ROUTES 
router.get('/getAllPosts', blogController.getAllPosts);
router.post('/createPost', blogController.createPost);

module.exports = router;