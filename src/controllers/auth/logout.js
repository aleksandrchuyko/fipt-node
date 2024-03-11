const { User } = require("../../models/users/user");

const logout = async (req, res) => {
  console.log("logout");
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: "" });

  res.status(204).json({ message: "Logout success" });
};

module.exports = logout;
