const cookieParser = require('cookie-parser');
const logger = require('morgan');
const express = require('express');
const app = express();

// IMPORTING ROUTES
const blogRoutes = require('./routes/blogRoutes');
const authRoutes = require('./routes/authRoutes');

// MIDDLEWARES
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// MOUNTING ROUTES
app.use('/blog', blogRoutes);
app.use('/auth', authRoutes);

module.exports = app;