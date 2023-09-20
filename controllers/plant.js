const router = require('express').Router()
const db = require('../models')
const plant = require('../models/plant')

// router.get('/', async (req, res) => {
//     const plants = await Plant.find().populate('plants')
//     res.json(plants)
// })

//GET Plants
router.get('/', (req, res) => {
    db.Plant.find()
    .then((plants) => {
        res.render('plants/index', { plants })
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
      })
})

//GET New Plant Form
router.get('/new', (req, res) => {
    res.render('plants/new')
})

router.get('/:id', (req, res) => {
    db.Plant.findById(req.params.id)
    .then(plant => {
        res.render('plants/show', { plant })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /plants')
})

// router.get('/')

// router.get('/')

// router.get('/')

module.exports = router