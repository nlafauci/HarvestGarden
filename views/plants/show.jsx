const React = require('react')
const Def = require('../default')

function show (data) {
    return ( 
        <Def user={data?.user}>
            <main>
                <div className="row">
                    <div className="col-sm-6">
                        <img src= {data.plant.image} alt= {data.plant.name} />
                        <h3> 
                            {data.plant.name} 
                        </h3>

                    </div>
                    <div className="col-sm-6">
                        <h1>{ data.plant.name }</h1>
                        <h2>Water Amount: </h2>
                        { data.plant.needsLight }
                        <br />
                        <h2>Light Amount: </h2>
                        { data.plant.needsWater }
                        <br />
                        <h2>Description: </h2>
                        <h3>
                            plants are plants are plants are plants
                        </h3>
                        <h4>
                            Plants are plants are plants are plants are plants
                        </h4>
                    </div>
                </div>
                <h1>Showing off Plants</h1>
            </main>
        </Def>
    )
} 

module.exports = show