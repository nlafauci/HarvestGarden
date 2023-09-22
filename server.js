const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const passport = require("passport");
const LocalStrategy = require("passport-local");
require("dotenv").config();
const plantController = require("./controllers/plant");
const authController = require("./controllers/auth");
const User = require("./models/user");
const config = require("./config");

const app = express();

// MIDDLEWARE
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// Passport Configuration
app.use(
  require("express-session")({
    secret: config.secretKey,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
};

// ROUTES
app.use("/plants", isAuthenticated, plantController);
app.use("/", authController);

app.get("/", isAuthenticated, (req, res) => {
  res.render("home");
});

// DB Connection
mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.l5mv6kh.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));

const PORT = 3000;

app.listen(PORT, console.log(`listening on port ${PORT}`));
