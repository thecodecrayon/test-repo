const User = require('../models/User');

// CONTROLLER
// CREATING A NEW USER
exports.signup = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    if(!user)
      throw new Error('Unable to create new user');

    return res.status(201).send({
      status: 'success',
      data: {
        user
      }
    })
  } catch (err) {
    return res.status(404).send({
      status: 'fail',
      message: err
    });
  }
};

// VERIFYING THE USER AND LOGGING IN
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ where: { email } });
    if(!user)
      throw new Error('Invalid email or password!');
    if(!(user.password === password))
      throw new Error('Invalid email or password!');
    return res.status(200).send({
      status: "success",
      data: {
        user: {
          id: user.id,
          email: user.email
        }
      }
    })
  } catch(err) {
    return res.status(404).send({
      status: 'fail',
      message: err.message
    });
  }
};
