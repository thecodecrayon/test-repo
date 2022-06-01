const sequelizeDB = require('../config/connection');
const { DataTypes } = require('sequelize');

const User = sequelizeDB.define('user', {
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },  
  password: {
    type: DataTypes.STRING
  }
});

module.exports = User;