const { User } = require("../db/models");

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch(err) {
    console.error(err);
  }
}

const currentUser = (req, res) => {
  res.send("CURRENT USER");
}

module.exports = {
  getUsers,
  currentUser
}
