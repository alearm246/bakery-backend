const jwt = require("jsonwebtoken");
const { User } = require("../db/models");

const verifyJwt = async (req, res, next) => {
  const token = req.cookies.jwt;
  jwt.verify(token, "some random jwt secret", async (err, user) => {
    if(err) {
      console.error(`There was a problem trying to verify the jwt: ${err}`);
      res.status(404).send(`There was a problem trying to verify the jwt: ${err}`)
    }
    const currentUser = await User.findOne({
      where: { id: user.id },
    });

    req.user = {
      id: currentUser.id,
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      socialMedia: currentUser.socialMedia,
      socialMediaHandle: currentUser.socialMediaHandle,
    };

    next();
  })
};

module.exports = verifyJwt;
