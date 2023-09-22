const router = require("express").Router();
const passport = require("passport");
const User = require("../models/user.js");
router.get("/login", (req, res) => {
  res.render("authentication/login", { user: req.user });
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/login",
  })
);
// Render the registration form
router.get("/register", (req, res) => {
  res.render("authentication/registration", { user: req.user });
});

// Handle registration logic
router.post("/register", async (req, res) => {
  console.log("register endpoint hitted");
  try {
    const newUser = new User({ username: req.body.username });

    // Use the 'register' method provided by passport-local-mongoose
    await User.register(newUser, req.body.password, (err, user) => {
      if (err) {
        console.error(err);
        return res.render("authentication/registration"); // Render the registration form again on error
      }

      // Authenticate the user after successful registration
      passport.authenticate("local")(req, res, () => {
        res.redirect("/home"); // Redirect to the dashboard on successful registration
      });
    });
  } catch (err) {
    console.error(err);
    return res.render("authentication/registration"); // Render the registration form again on error
  }
});
router.get("/home", (req, res) => {
  res.render("home");
});
// Logout route
router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error(err);
    }
    res.redirect("/");
  });
});

module.exports = router;
