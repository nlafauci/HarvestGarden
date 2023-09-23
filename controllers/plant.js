const router = require('express').Router()
const db = require('../models')
const axios = require('axios')

//GET All Plants
router.get('/', (req, res) => {
    db.Plant.find()
        .sort({ _id: -1 })
        .then((plants) => {
            res.render('plants/index', { plants, user: req.user })
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
        })
})

// Search for plants
router.get("/search", async (req, res) => {
    const plantName = req.query.query;
    try {
        const response = await axios.get(`https://trefle.io/api/v1/plants/search?token=RwDvoRFeKEv5omklz4Yz-pY_lgoCfT5KOJ2Zkh5f9-0&q=${plantName}&limit=20`);


        const plantData = response?.data?.data; // Assuming the API response contains plant information
        // console.log("plantData: ");
        // console.log(plantData);

        res.render("plants/search-result", { user: req.user, plantData, query: plantName });
    } catch (error) {
        console.error(error);
        res.status(500).render("error", { message: "Plant search failed" });
    }
});

// Search for plants
router.post("/search/add_plant_to_profile", async (req, res) => {
    const data = req.body;
    try {
        const plantExist = await db.Plant.findOne({ name: data.name }).then(plant => plant)
        if (!plantExist?.name) {
            await db.Plant.create(data)
                .then((e) => e)
                .catch(err => {
                    console.log('err', err)
                    return res.status(500).render("error", { message: "add_plant_to_profile failed", err });
                })
        }
        // return res.redirect(`/plants/search?query=${data.query}`);
        res.redirect('/plants')
    } catch (error) {
        console.error(error);
        res.status(500).render("error", { message: "add_plant_to_profile failed" });
    }
});

//GET New Plant Form
router.get('/new', (req, res) => {
    const plants = db.Plant.find()
    res.render('plants/new', { plants, user: req.user })
})

// GET Plant by Id
router.get('/:id', async (req, res) => {
    await db.Plant.findById(req.params.id)
        .then(plant => {
            res.render('plants/show', { plant, user: req.user })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

// POST Create new Plant
router.post('/', async (req, res) => {
    // console.log("req.body: ");
    // console.log(req.body);
    const data = req.body
    await db.Plant.create(data)
        .then(() => {
            res.redirect('/plants/index')
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})


module.exports = router