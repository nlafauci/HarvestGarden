const React = require('react')
const Def = require('../default')

function plantCard (data) {
    let lePlant = data.plants.map((plant) => {
      return (
        <div className='card'>
          <img src={plant.image} alt={plant.name}/>
          <h2>{plant.name}</h2>          
        </div>
      )
  }
}  

module.exports = plantCard