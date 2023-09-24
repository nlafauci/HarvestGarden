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

router.put('/:id', (req, res) => {
    db.Plant.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.redirect(`/plants/${req.params.id}`)
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

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
// router.post('/', (req, res) => {
//     db.Plant.create(req.body)
//     .then(() => {
//       res.redirect('/plants/index')
//     })
//     .catch(err => {
//       console.log('err', err)
//       res.render('error404')
//     })
// })


module.exports = router