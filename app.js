const logger = require('morgan');
const express = require('express');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

module.exports = app;