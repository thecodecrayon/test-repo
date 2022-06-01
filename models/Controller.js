const sequelizeDB = require('../config/connection');
const { DataTypes } = require('sequelize');

const Controller = sequelizeDB.define('controller', {
  controller_name: {
    type: DataTypes.STRING
  },
  controller_label: {
    type: DataTypes.STRING
  },
  sequence: {
    type: DataTypes.INTEGER
  }
});

module.exports = Controller;