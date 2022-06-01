const sequelizeDB = require('../config/connection');
const { DataTypes } = require('sequelize');

const Role = sequelizeDB.define('role', {
  role_name: {
    type: DataTypes.STRING
  },
  role_label: {
    type: DataTypes.STRING
  },
  role_permissions: {
    type: DataTypes.TEXT
  },
  status: {
    type: DataTypes.INTEGER
  },
  created_by: {
    type: DataTypes.INTEGER
  },
  updated_by: {
    type: DataTypes.INTEGER
  },
  is_deleted: {
    type: DataTypes.INTEGER
  }
});

module.exports = Role;