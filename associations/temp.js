// const Role = require('../models/Role');
// const Controller = require('../models/Controller');
// const Action = require('../models/Action');
const User = require('../models/User');
const Blog = require('../models/Blog');
const sequelizeDB = require('../config/connection');

// CREATING ASSOCIATION HERE
User.hasMany(Blog, { foreignKey: 'user_id' });
Blog.belongsTo(User, { foreignKey: 'user_id' });

sequelizeDB.sync({ alter: true })
  .then(() => {
    // instruction goes here
    
  })
  .catch(err => console.log(err));
