const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { User } = require("../db/models");

passport.use(
  new GoogleStrategy(
    {
      clientID: "805173719573-9qtdjel5a3ivqjtln2p9f66r2eh74qkg.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:3001/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        //checks if there's an existing user in the databsae
        const currentUser = await User.findOne({
          where: { googleId: profile.id },
        });
        if (currentUser) {
          done(null, currentUser);
        } else {
          //creates new user and profile if no account exists already
          const newUser = await User.create(
            {
              googleId: profile.id,
              firstName: profile.name.givenName,
              lastName: profile.name.familyName,
              gradeLevel: 0,
              socialMedia: "",
              socialMediaHandle: "",
            }
          );
          done(null, newUser);
        }
      } catch (err) {
        done(err);
        console.error("error authenticating with google: ", err);
      }
    }
  )
);
