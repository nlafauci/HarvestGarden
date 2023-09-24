const db = require('../models');
db.Plant.deleteMany()
.then(() => {
    db.Plant.create([{
        name: 'Saguaro Cactus',
        isIndoor: false,
        needsLight: 'Full Sunlight',
        needsWater: 'Water Every Other Week',
        image: 'https://assets.wfcdn.com/im/98531639/resize-h445%5Ecompr-r85/2413/241345336/Sonora+Desert+Saguaro+On+Plastic%2FAcrylic+by+Charles+Harker+Print.jpg',
        description: 'Loves to be a prick'
    }, {
        name: 'Aloe Vera',
        isIndoor: true,
        needsLight: 'Indirect Sunlight',
        needsWater: 'Water Weekly',
        image: 'https://www.google.com/aclk?sa=l&ai=DChcSEwjh7f2BvLWBAxX3JrMAHQFABVoYABABGgJ5bQ&ase=2&gclid=CjwKCAjw6p-oBhAYEiwAgg2Pgo0JdcSJ23_LUlED72hs8MVfFPG757KM1M7WFH3ZCe2GphFzs8woaxoCo8wQAvD_BwE&sig=AOD64_1diL9OFIqIyrMIa5cHwLc8NqViaQ&ctype=5&nis=6&adurl&ved=2ahUKEwiXx-2BvLWBAxXeJ2IAHdlgAVMQvhd6BAgBEH0',
        description:'I can fix him! Everyone needs a little healing.'
    }, {
        name: 'Fern',
        isIndoor: true,
        needsLight: 'Direct Sunlight',
        needsWater: 'Water Daily',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQofNzQ5NggTZ3v4oyTZmrDpfS9xgr2otUgl_poUCpv5nV2zg-0uwb0BEZttoeQPtMDqc0&usqp=CAU',
        description:'You/ve probably seen me on Phineas & Fern'
    },{
        name: 'Carrot',
        isIndoor: false,
        needsLight: 'Full Sunlight',
        needsWater: 'Water Weekly',
        image: 'https://images.unsplash.com/photo-1582515073490-39981397c445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
        description: 'Little orange dudes full of incredible vitamins and minerals. Knows how to make a rabbit happy.'
    }, {
        name: 'Orchids',
        isIndoor: true,
        needsLight: 'Indirect Sunlight',
        needsWater: 'Water Weekly',
        image: 'https://www.sunset.com/wp-content/uploads/orchids-pc-dmitriy-sidor-getty-1200x600.jpg',
        description: 'Orchid care is not difficult; just different!'
    }, {
        name: 'Poison Ivy',
        isIndoor: false,
        needsLight: 'Full Sunlight',
        needsWater: 'Water Every Other Week',
        image: 'https://www.verywellhealth.com/thmb/-ydqcKSn-B44ihm5fWzkNQjSwGc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-951410190-b5e263bc76f44d05a02979586ae7cc8a.jpg',
        description: 'Harbringers of itchiness I would not wish upon my worst enemies. Or would I...?'
    }])
    .then(() => {
        console.log('Success!')
        process.exit()
    })
    .catch(err => {
        console.log('Failure!', err)
        process.exit()
    })
})


