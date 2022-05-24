const jwt = require("jsonwebtoken");

const { User } = require("../db/models");

const EXP_DATE = 86400000;

const COOKIES_OPTS = {
  sameSite: "None",
  secure: true,
  httpOnly: true,
  maxAge: EXP_DATE,
}

const login = (req, res) => {
  const { id, firstName, lastName } = req.user;

  const jwtUser = {
    id,
    firstName,
    lastName,
  };

  //creates JWT with current user information
  const token = jwt.sign(jwtUser, "some random jwt secret", {
    expiresIn: EXP_DATE,
  });
  //if in dev environment, dissable secure options
  if (true) {
    res.cookie("jwt", token);
  } else {
    res.cookie("jwt", token, COOKIES_OPTS);
  }
  //redirects user to the signup page if they don't have a username or if they haven't signed up
  res.send("SUCCESSFULLY LOGGED IN");
};

const logout = (req, res) => {
  try {
    if (true) {
      res.clearCookie("jwt");
    } else {
      res.clearCookie("jwt", COOKIES_OPTS);
    }
    res.status(200).send("logged out");
  } catch (err) {
    res.status(500).send("Internal server error");
    console.error("logout error: ", err);
  }
};



module.exports = {
  login,
  logout,
};
