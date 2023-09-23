const router = require('express').Router()
const db = require('../models')

//GET All Plants
router.get('/', (req, res) => {
    db.Plant.find()
        .then((plants) => {
            res.render('plants/index', { plants, user: req.user })
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
        })
})

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