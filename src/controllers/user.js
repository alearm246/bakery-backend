const getUsers = async (req, res) => {
  try {
    res.send("GET USERS");
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
