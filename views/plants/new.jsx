const React = require('react')
const Def = require('../default')

function new_plant () {
    return (
        <Def>
            <main>
                <h1>Add a New Plant</h1>
                <form method="POST" action='/plants'>
                    <div>
                        <label htmlFor="name">Plant Name</label>
                        <input id="name" name="name" required/>
                    </div>
                    <div>
                        <label htmlFor="light">Light Exposure Needed</label>
                        <input id="light" name="light" required/>
                    </div>
                    <div>
                        <label htmlFor="water">Water Amount</label>
                        <input id="water" name="water" required/>
                    </div>
                    <div>
                        <label htmlFor="pic">Plant Picture</label>
                        <input type="url" id="pic" name="pic" />
                    </div>
                    <div>
                        <label htmlFor="season">Planting Season</label>
                        <input id="season" name="season" required/>
                    </div>
                    <input type="submit" value="Add Plant" />
                </form>
            </main>
        </Def>
    )
}

module.exports = new_plant