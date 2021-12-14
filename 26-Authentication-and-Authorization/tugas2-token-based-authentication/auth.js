const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.AUTH_PORT || 3000;

app.use(bodyParser.json());

const users = [
  {
    username: "terra",
    password: "password123admin",
    role: "admin",
  },
  {
    username: "dave",
    password: "password123member",
    role: "member",
  },
];

function generateAccessToken({ username, role }) {
  const accessTokenSecret = process.env.TOKEN_SECRET;

  return jwt.sign({ username: username, role: role }, accessTokenSecret);
}

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users?.find((user) => user.username === username && user.password === password);

  if (user) {
    const accessToken = generateAccessToken(user);

    res.json({ accessToken });
  } else {
    res.send("Username or password incorrect");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
