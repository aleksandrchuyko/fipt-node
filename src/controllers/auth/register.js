const bcrypt = require('bcryptjs');

const { User } = require('../../models/users/user');
const { RequestError } = require('../../utils');

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw RequestError(409, 'Email in use');
  }
  const hashPassword = await bcrypt.hash(password, 10);

  const result = await User.create({
    email,
    password: hashPassword,
  });
  res.status(201).json({
    user: {
      email: result.email,
    },
  });
};

module.exports = register;
