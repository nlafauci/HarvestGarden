const db = require('../models')

async function seed() {
    let plant = await db.Plant.findOne({ name: 'Fern' })

    let comment = await db.Comment.create({
        author: 'Jason',
        stars: 5.0,
        content: 'I recommend cultivating this plant because of its easy growing method.'
    })

    plant.comments.push(comment.id)

    await plant.save()
    
    process.exit()
}

seed()
