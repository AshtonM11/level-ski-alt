require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const strategy = require(`${__dirname}/strategy.js`);
const path = require("path");

const passport = require("passport");

const controller = require("./Controller");
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

passport.serializeUser(function(fbUser, done) {
  console.log("FBUSER", fbUser);
  const db = app.get("db");
  db.get_students([fbUser.id]).then(user => {
    if (user[0]) {
      return done(null, { ...fbUser, id: user[0].id });
    } else {
      db.create_students([fbUser.nickname, fbUser.id, fbUser.picture])
        .then(user => {
          return done(null, { ...fbUser, id: user[0].id });
        })
        .catch(err => {
          return done(null, { ...fbUser, id: user[0].id });
        });
    }
  });
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.use(express.static(path.join(__dirname, "../build")));

// Student endpoints
app.get("/api/students", controller.getAll);
app.post("/api/students", controller.create);

// Instructor endpoint
app.get("/api/instructors", controller.getInst);

//Auth0 login
app.get(
  "/login",
  passport.authenticate("auth0", {
    successRedirect: "/me",
    failureRedirect: "/login",
    failureFlash: false
  })
);

app.get("/api/user", (req, res) => {
  res.send(req.session.user);
});

app.get("/me", (req, res, next) => {
  req.session.user = req.user;
  if (!req.user) {
    res.redirect("/login");
  } else {
    res.redirect("/");
  }
});

const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
