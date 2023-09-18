const React = require('react')
const Def = require('../default')

function index (data) {
    let plantsFormatted = data.plants.map((plant) => {
      return (
        <div>
          <h2>{plant.name}</h2>
          <h3>Light Needed: {plant.light}</h3>
          <h3>Water Needed: {plant.water}</h3>
          <img src={plant.pic} alt={plant.name}/>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>PLANTS INDEX PAGE</h1>
              {plantsFormatted}
          </main>
      </Def>
  )
  }
  

module.exports = index