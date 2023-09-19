const router = require('express').Router()
const db = require('../models')

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
    //Plant Mock Data
    let plants = [{
        name: 'Tomato',
        light: '☀️☀️☀️☀️☀️',
        water: '💧💧💧💧💧',
        season: 'Summer',
        pic: 'https://images.unsplash.com/photo-1596199050105-6d5d32222916?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
    }, {
        name: 'Strawberry',
        light: '☀️☀️☀️☀️☀️',
        water: '💧💧💧💧💧', 
        season: 'Spring',
        pic: 'https://images.unsplash.com/photo-1582757793483-e407049be006?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
    }]
    res.render('plants/index', { plants })
})

//GET New Plant Form
router.get('/new', (req, res) => {
    res.render('plants/new')
})

router.get('/:id', (req, res) => {
    res.render('plants/:id')
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /plants')
})

// router.get('/')

// router.get('/')

// router.get('/')

module.exports = router