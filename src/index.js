const express = require("express");
const { sequelize } = require("./db/models/index");

const userRoutes = require("./routes/user");

const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.json());

//Routes
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("WELCOME TO BAKERY BACKEND");
});

sequelize.sync({ force: true })
         .then(() => console.log("synced"))
         .catch(err => console.log(`couldn't sync: ${err}`));

app.listen(PORT, () => console.log(`local server running on ${PORT}`))
