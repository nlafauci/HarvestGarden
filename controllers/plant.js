const router = require("express").Router();
const db = require("../models");

//GET All Plants
router.get("/", (req, res) => {
  db.Plant.find()
    .then((plants) => {
      res.render("plants/index", { plants });
    })
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
});
// Search for plants
router.get("/search", (req, res) => {
  const query = req.query.query;
  db.Plant.find({ name: { $regex: query, $options: "i" } })
    .then((results) => {
      res.render("plants/search", { results });
    })
    .catch((err) => {
      console.error(err);
      res.render("error404");
    });
});

//GET New Plant Form
router.get("/new", (req, res) => {
  const plants = db.Plant.find();
  res.render("plants/new", { plants });
});

// GET Plant by Id
router.get("/:id", (req, res) => {
  db.Plant.findById(req.params.id)
    .then((plant) => {
      console.log("Plant:", plant);

      res.render("plants/show", { plant });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

// POST Create new Plant
// router.post('/', (req, res) => {
//     console.log("route hitted")
//     db.Plant.create(req.body)
//     .then(() => {
//       res.redirect('/plants/index')
//     })
//     .catch(err => {
//       console.log('err', err)
//       res.render('error404')
//     })
// })

module.exports = router;
