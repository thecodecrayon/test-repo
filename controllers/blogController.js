// IMPORTS
const Blog = require('../models/Blog');
const User = require('../models/User');

// ASSOCIATION 
User.hasMany(Blog, { foreignKey: 'user_id' });
Blog.belongsTo(User, { foreignKey: 'user_id' });

// CONTROLLERS
exports.getAllPosts = async (req, res, next) => {
  let user = await User.findOne({ where: { id: req.user.id } });
  let blogs = await user.getBlogs();

  return res.status(200).send({
    status: "success",
    data: {
      blogs
    }
  })
};

exports.createPost = (req, res, next) => {

};