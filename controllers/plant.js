const router = require('express').Router()
const db = require('../models')

//GET All Plants
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
    const plants = db.Plant.find()
    res.render('plants/new', { plants })
})

// GET Plant by Id
router.get('/:id', (req, res) => {
    db.Plant.findById(req.params.id)
    .populate('comments')
    .then(plant => {
        res.render('plants/show', { plant })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

// GET Edit Plant Form 
router.get('/:id/edit', (req, res) => {
    db.Plant.findById(req.params.id)
        .then(plant => {
            res.render('plants/edit', { plant })
        })
        .catch(err => {
            res.render('error404')
        })
})

// PUT update plants
router.put('/:id', async (req, res) => {
    const { id } = req.params
    if(req.body.isIndoor === 'on') {
        req.body.isIndoor = true
    } else {
        req.body.isIndoor = false
    }
    
    if(!req.body.image) req.body.image = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fnetworkofnature.org%2Fspecies%2Fwoody-plants%2F&psig=AOvVaw0-c9AifmZYM9OTWrmVdbcu&ust=1695579414331000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJDG-9erwYEDFQAAAAAdAAAAABAE'

    await db.Plant.findByIdAndUpdate(id, req.body)
    res.redirect(`/plants/${id}`)
 })

 // POST add comment
router.post('/:id/comment', (req, res) => {
    console.log(req.body)
    db.Plant.findById(req.params.id)
    .then(plant => {
        db.Comment.create(req.body)
        .then(comment => {
            plant.comments.push(comment.id)
            plant.save()
            .then(() => {
              console.log(["test"])
                res.redirect(`/plants/${req.params.id}`)
            })
            .catch(err => {
              console.log(err)
              res.render('error404')
              })
          
        })
        .catch(err => {
            res.render('error404')
        })
    })
    .catch(err => {
        res.render('error404')
    })
  })

// DELETE route 
router.delete('/:id', (req, res) => {
    db.Plant.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/plants')
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})


// POST Create new Plant
router.post('/', async (req, res) => {
    if(req.body.isIndoor === 'on') {
        req.body.isIndoor = true
    } else {
        req.body.isIndoor = false
    }
    
    if(!req.body.image) req.body.image = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fnetworkofnature.org%2Fspecies%2Fwoody-plants%2F&psig=AOvVaw0-c9AifmZYM9OTWrmVdbcu&ust=1695579414331000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJDG-9erwYEDFQAAAAAdAAAAABAE'

    await db.Plant.create(req.body)
    .then(() => {
      res.redirect('/plants')
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})


 //GET 404 page
 router.get('/*', (req, res) => {
    db.Plant.find()
    .then((plants) => {
        res.render('plants/index', { plants })
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
      })
})



module.exports = router