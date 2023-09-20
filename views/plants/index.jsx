const React = require('react')
const Def = require('../default')

function index (data) {
    let plantsFormatted = data.plants.map((plant) => {
      return (
        <div key={plant.id} className="col-sm-6">
          <h2>
            <a href={`/plants/${plant.id}`}>{plant.name}</a>
          </h2>
          <img src={plant.image} alt={plant.name}/>
          <h3>Light Needed: {plant.light}</h3>
          <h3>Water Needed: {plant.water}</h3>
          
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