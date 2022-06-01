// const Role = require('../models/Role');
// const Controller = require('../models/Controller');
// const Action = require('../models/Action');
const User = require('../models/User');
const Blog = require('../models/Blog');
const sequelizeDB = require('../config/connection');

// ASSOCIATION 
User.hasMany(Blog, { foreignKey: 'user_id' });
Blog.belongsTo(User, { foreignKey: 'user_id' });

let user, posts;

sequelizeDB.sync({ alter: true })
  .then(() => {
    // instruction goes here
    return User.findOne({ where: { id: 1 } });
  })
  .then(data => {
    user = data;
    return user.getBlogs();
  })
  .then(data => {
    posts = data;
    console.log('POSTS:', posts);
  })
  .catch(err => console.log(err));
