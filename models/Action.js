const sequelizeDB = require('../config/connection');
const { DataTypes } = require('sequelize');

const Action = sequelizeDB.define('action', {
  action_name: {
    type: DataTypes.STRING
  },
  action_label: {
    type: DataTypes.STRING
  },
  is_deleted: {
    type: DataTypes.INTEGER
  }
});

module.exports = Action;