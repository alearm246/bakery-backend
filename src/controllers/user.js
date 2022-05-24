const { User } = require("../db/models");

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).send(users);
  } catch(err) {
    console.error(err);
  }
}

const currentUser = (req, res) => {
  if(!req.user) return res.status(404).send("You aren't logged in");

  res.status(200).send(req.user);
}

module.exports = {
  getUsers,
  currentUser
}
