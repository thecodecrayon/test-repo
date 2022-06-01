const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('rbac', 'postgres', 'iopiopiop', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

sequelize.authenticate()
  .then(() => console.log('DB connected successfully!'))
  .catch(err => console.log(err));

sequelize.sync({ alter: true })
  .then(() => {
    // instructions goes here
  })
  .catch(err => console.log(err));

module.exports = sequelize;