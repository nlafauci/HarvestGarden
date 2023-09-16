const router = require('express').Router()

router.get('/', async (req, res) => {
    const plants = await Plant.find().populate('plants')
    res.json(plants)
})

// router.get('/')

// router.get('/')

// router.get('/')

// router.get('/')

module.exports = router