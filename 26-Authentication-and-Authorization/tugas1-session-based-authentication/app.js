const express = require("express");
const sessions = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3000;

const oneMinute = 1000 * 60;
app.use(
  sessions({
    secret: "mysecretkey",
    saveUninitialized: true,
    cookie: { maxAge: oneMinute },
    resave: false,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname));

app.use(cookieParser());

const myUsername = "user1";
const myPassword = "mypassword";

let session;

app.get("/", (req, res) => {
  session = req.session;

  if (session.userId) {
    res.send(`Welcome User <a href=\'/logout'>click to logout</a>`);
  } else {
    res.sendFile("views/index.html", { root: __dirname });
  }
});

app.post("/user", (req, res) => {
  const { username, password } = req.body;

  if (username == myUsername && password == myPassword) {
    session = req.session;
    session.userId = username;

    res.send(`Hey there, welcome <a href=\'/logout'>click to logout</a>`);
  } else {
    res.send("Invalid username or password");
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
