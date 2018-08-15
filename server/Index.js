require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const strategy = require(`${__dirname}/strategy.js`);

const passport = require("passport");

// const controller = require("./controller");
const cors = require("cors");

const app = (module.exports = express());
app.use(cors());
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);

passport.serializeUser(function(user, done) {
  console.log("this is user", user);
  done(null, {
    id: user.id,
    display: user.displayName,
    nickname: user.nickname,
    picture: user.picture
  });
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

//Auth0 login
app.get(
  "/login",
  passport.authenticate("auth0", {
    successRedirect: "/me",
    failureRedirect: "/login",
    failureFlash: true
  })
);

app.get("/api/user", (req, res) => {
  console.log("req.session", req.session);
  res.send(req.session.user);
});

app.get("/me", (req, res, next) => {
  req.session.user = req.user;
  if (!req.user) {
    res.redirect("/login");
  } else {
    res.redirect("http://localhost:3000");
    // res.status(200).send(JSON.stringify(req.user, null, 10));
  }
});

const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
