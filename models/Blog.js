const sequelizeDB = require('../config/connection');
const { DataTypes } = require('sequelize');

const Blog = sequelizeDB.define('blog', {
  title: {
    type: DataTypes.TEXT
  },
  description: {
    type: DataTypes.TEXT
  },
  is_deleted: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
});

module.exports = Blog;