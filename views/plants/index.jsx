const React = require("react");
const Def = require("../default");

function index(data) {
  let plantsFormatted = data.plants.map((plant) => {
    return (
      <div>
        <h2>{plant.name}</h2>
        <h3>Light Needed: {plant.light}</h3>
        <h3>Water Needed: {plant.water}</h3>
        <img src={plant.image} alt={plant.name} />
      </div>
    );
  });
  return (
    <Def>
      <form action="/plants/search" method="GET">
        <input type="text" name="query" placeholder="Search for plants..." />
        <button type="submit">Search</button>
      </form>

      <main>
        <h1>PLANTS INDEX PAGE</h1>
        {plantsFormatted}
      </main>
    </Def>
  );
}

module.exports = index;
