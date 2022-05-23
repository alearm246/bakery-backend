const express = require("express");

const userRoutes = require("./routes/user");

const app = express();
const PORT = process.env.PORT || 3001;

//Routes
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("WELCOME TO BAKERY BACKEND");
});

app.listen(PORT, () => console.log(`local server running on ${PORT}`))
