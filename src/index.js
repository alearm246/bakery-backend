const express = require("express");
const { sequelize } = require("./db/models/index");
const passport = require("passport");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

const verifyJwt = require("./middleware/verifyJwt");

const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: ["http://localhost:3000"],
}))
app.use(passport.initialize());
//app.use(passport.session());

//imports code from googleStrategy.js
require("./auth/googleStrategy");

//Routes
app.use("/auth", authRoutes);
app.use("/users", verifyJwt, userRoutes);

app.get("/", (req, res) => {
  res.send("WELCOME TO BAKERY BACKEND");
});

sequelize.sync({ force: true })
         .then(() => console.log("synced"))
         .catch(err => console.log(`couldn't sync: ${err}`));

app.listen(PORT, () => console.log(`local server running on ${PORT}`))
