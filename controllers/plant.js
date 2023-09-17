const router = require('express').Router()

router.get('/', async (req, res) => {
    const plants = await Plant.find().populate('plants')
    res.json(plants)
})

router.get('/', (req, res) => {
    res.send('GET /plants. This is where the index is at')
})

// router.get('/')

// router.get('/')

// router.get('/')

module.exports = router