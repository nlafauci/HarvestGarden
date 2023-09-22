const React = require("react");
const Def = require("../default");

function show(props) {
  const { plant } = props;

  return (
    <Def>
      <h2>Show Page</h2>
      <h3>{plant.name}</h3>
      <p>{plant.isIndoorParagraph()}</p>
      <p>{plant.needsLightParagraph()}</p>
      <img src={plant.image} alt={plant.name} />
      <a href={`/plants/${plant._id}/edit`}>
        <button> Edit </button>
      </a>
      <form action={`/plants/${plant._id}?_method=DELETE`} method="POST">
        <input type="submit" value="DELETE" />
      </form>
    </Def>
  );
}

module.exports = show;
