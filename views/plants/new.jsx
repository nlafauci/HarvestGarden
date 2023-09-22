const React = require('react')
const Def = require('../default')

function new_plant(data) {
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
                        <label htmlFor="needsLight">Light Exposure Needed</label>
                        <select 
                        id="needsLight" 
                        name="needsLight"
                        // value={data.plant.needsLight} 
                        onChange={(event) => {
                            data.plant.needsLight = event.target.value
                        }}
                        required>
                        <option value="direct sunlight (indoors)">Direct Sunlight</option>
                        <option value="indirect sunlight (indoors)">Indirect Sunlight</option>
                        <option value="full sunlight (outdoors)">Full Sunlight</option>
                        <option value="partial sunlight (outdoors)">Partial Sunlight</option>
                       </select>
                    </div>
                    <div>
                        <label htmlFor="needsWater">Water Amount Needed</label>
                        <select 
                        id="needsWater" 
                        name="needsWater" 
                        required>
                            <option value="water daily">Water Daily</option>
                            <option value="water every other day">Water Every Other Day</option>
                            <option value="water weekly">Water Weekly</option>
                            <option value="water every other week">Water Every Other Week</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="image">Plant Picture</label>
                        <input type="url" id="image" name="image" />
                    </div>
                    <div>
                        <label htmlFor="isIndoor">Is it an indoor plant?</label>
                        <input type="checkbox" id="isIndoor" name="isIndoor" required defaultChecked/>
                    </div>
                    <input type="submit" value="Add Plant" />
                </form>
            </main>
        </Def>
    )
}

module.exports = new_plant