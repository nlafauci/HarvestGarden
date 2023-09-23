const React = require('react')
const Def = require('../default')

function show (data) {
    return ( 
        <Def>
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
                <h1>Comments</h1>
                    <form method="POST" action={`/plants/${data.plant.id}/comment`}>
                    <div className="form-group">
                        <label htmlFor="content"> Content </label>
                        <textarea name="content" className="form-control"> </textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input className="form-control" id="author" name="author" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="stars">Star Rating</label>
                        <input type="range" step="1" min="1" max="5" className="form-range" id="stars" name="stars" />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Comment" />
            </form>
            </main>
        </Def>
    )
} 

module.exports = show